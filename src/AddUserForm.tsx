// import { useQuery, gql } from "@apollo/client";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

interface IUser {
  username: string;
  fName: string;
  lName: string;
}

/** AddUserForm Component */

function AddUserForm() {
  // let user;
  //   const [formData, setFormData] = useState({
  //   username: "",
  //   fName: "",
  //   lName: "",
  // });
  // const [formErrors, setFormErrors] = useState([]);
  // const [user, { loading, error, data }] = useMutation(user);

  // function addUser(u: IUser) {
  //   return `mutation addUser {
  //           createUser(username:"${u.username}",first_name:"${u.fName}",last_name:"${u.lName}") {
  //               username
  //               first_name
  //               last_name
  //           }
  //   }`;
  // }

  // function handleSubmit(evt: React.FormEvent) {
  //   console.log("in handle submit > formData",formData)
  //   evt.preventDefault();
  //   user = gql`
  //     ${addUser(formData)}
  //   `;
  //   console.log('user',user)
  // }

  /** Update form data field */
  // function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
  //   const { name, value } = evt.target;
  //   setFormData((data) => ({ ...data, [name]: value }));
  // }

  // function handleChange(evt) {

  // }
  return (
    <div className="AddUserForm">
      {/* <h1>Add User Form</h1>
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">First name</label>
                <input
                  name="fName"
                  className="form-control"
                  value={formData.fName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last name</label>
                <input
                  name="lName"
                  className="form-control"
                  value={formData.lName}
                  onChange={handleChange}
                />
              </div>

              <div className="d-grid">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AddUserForm;
