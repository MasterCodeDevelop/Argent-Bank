import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { clearMessage } from '../slices/message';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../slices/user';

function Welcome({ firstName, lastName }) {
  const [edit, setEdit] = useState(false),
    initialValues = {
      firstName: '',
      lastName: '',
    },
    { token } = useSelector((state) => state.auth),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .test(
        'len',
        'The first name must be between 3 and 20 characters.',
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required!'),
    lastName: Yup.string()
      .test(
        'len',
        'The last name must be between 3 and 20 characters.',
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required!'),
  });
  const handleEdit = (formValue) => {
    const { firstName, lastName } = formValue;

    dispatch(updateUser({ token, firstName, lastName }))
      .unwrap()
      .then(() => {
        setEdit(false);
      })
      .catch(() => {
        setEdit(true);
      });
  };
  return (
    <section className="welcome">
      <h1>
        Welcome back
        <br />
        {edit ? <></> : <p>{firstName + '  ' + lastName + ' !'}</p>}
      </h1>

      {!edit ? (
        <button className="btn btn-secondary" onClick={() => setEdit(true)}>
          Edit
        </button>
      ) : (
        <>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleEdit}
          >
            <Form>
              <div className="form-group">
                <Field
                  name="firstName"
                  type="text"
                  placeholder={firstName}
                  className="form-control"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <Field
                  name="lastName"
                  type="text"
                  placeholder={lastName}
                  className="form-control"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group row">
                <button type="submit" className="btn btn-outline-secondary">
                  Save
                </button>
                <button
                  type="reset"
                  onClick={() => setEdit(false)}
                  className="btn btn-outline-secondary"
                >
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </>
      )}
    </section>
  );
}
Welcome.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
export default Welcome;
