import React, { useState } from 'react';

const BookNowForm = () => {
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    contact: '',
    gender: '',
    destination: '',
    city: '',
    person: '',
  });
  const inputHandler = (e) => {
    e.preventDefault();
    //   fname, lname, email, contact, gender, destination, city, person;
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    alert('Your booking successfully completed!');
  };
  return (
    <div className="d-flex justify-content-center my-5 px-3">
      <div className="container col-sm-12 col-12 mx-4 border shadow ">
        <div class="container p-4">
          <main>
            <div class="row g-5">
              <div class="col-md-7 col-lg-8">
                <h4 class="mb-3">Book My Trip</h4>
                <form
                  class="needs-validation"
                  novalidate
                  onSubmit={submitHandler}
                >
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <label for="firstName" class="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        placeholder="Harish"
                        name="fname"
                        value={user.fname}
                        onChange={inputHandler}
                        required
                      />
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label for="lastName" class="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastName"
                        placeholder=""
                        name="lname"
                        value={user.lname}
                        onChange={inputHandler}
                        required
                      />
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="email" class="form-label">
                        Email ID
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="you@example.com"
                        name="email"
                        value={user.email}
                        onChange={inputHandler}
                      />
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
                    <div class="col-6">
                      <label for="number" class="form-label">
                        Contact Number
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="number"
                        placeholder="9087643446"
                        name="contact"
                        value={user.contact}
                        onChange={inputHandler}
                      />
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
                    <div class="col-6">
                      <label for="country" class="form-label">
                        Gender
                      </label>
                      <select
                        class="form-select"
                        id="country"
                        name="gender"
                        value={user.gender}
                        onChange={inputHandler}
                        required
                      >
                        <option value="">Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid gender.
                      </div>
                    </div>

                    <div class="col-md-5">
                      <label for="Destination" class="form-label">
                        Destination
                      </label>
                      <select
                        class="form-select"
                        id="Destination"
                        name="destination"
                        value={user.destination}
                        onChange={inputHandler}
                        required
                      >
                        <option value="">Choose...</option>
                        <option>United States</option>
                        <option>India</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid Destination.
                      </div>
                    </div>

                    <div class="col-md-4">
                      <label for="city" class="form-label">
                        City
                      </label>
                      <select
                        class="form-select"
                        id="city"
                        name="city"
                        value={user.city}
                        onChange={inputHandler}
                        required
                      >
                        <option value="">Choose...</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Hydrabad</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid City.
                      </div>
                    </div>

                    <div class="col-md-3">
                      <label for="Person" class="form-label">
                        Person
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="Person"
                        placeholder="1"
                        name="person"
                        value={user.person}
                        onChange={inputHandler}
                        required
                      />
                      <div class="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>

                  <button
                    class="w-100 btn btn-primary btn-lg mt-4"
                    type="submit"
                  >
                    Book Now
                  </button>
                </form>
              </div>
              <div class="col-md-5 col-lg-4 order-md-last">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-primary">Traveling Cost</span>
                </h4>
                <ul class="list-group mb-3">
                  <li class="list-group-item d-flex justify-content-between align-items-center py-3 lh-sm">
                    <div>
                      <h6 class="">{user.city}</h6>
                    </div>
                    <span class="text-muted d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-currency-rupee"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                      </svg>
                      12
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center py-3 lh-sm">
                    <div>
                      <h6 class="my-0">Persons</h6>
                    </div>
                    <span class="text-muted d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-currency-rupee"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                      </svg>
                      {user.person}
                    </span>
                  </li>

                  <li class="list-group-item d-flex justify-content-between bg-light">
                    <div class="text-success">
                      <h6 class="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    <span class="text-success d-flex align-items-center">
                      −{' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-currency-rupee"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                      </svg>
                      5
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <span>Total Amount</span>
                    <strong className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-currency-rupee"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                      </svg>
                      20
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BookNowForm;
