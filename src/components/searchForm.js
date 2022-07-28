import React from "react";
// import form from "reactstrap"
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from 'yup';

//This file has SearchForm and SearchForV2.  They are just practice forms.
// Not used in the app.
//  They are very similar in form and function.
// 



// name
// genders
// email
// address...
// username?
// desired robot gender.

const SearchFormV2 =() =>{
	return (
		<Formik 
			initialValues =  {{
			firstName: "",
			lastName: "",
			message: "",
			email: "",
			colors:"",
		}}

		validationSchema = {Yup.object({
			firstname: Yup.string()
				.max(15,"Must be 15 characters or less."),
				// .required("Did you forget your name?"),
			lastName: Yup.string()
				.max(15, "Must be 15 characters or less."),
				// .required("Did you forget your last name too?"),
			email: Yup.string().email("Invalid Email address"),
			message: Yup.string()
				.max(20,"Don't write so much.")
		})}

		onSubmit = {(values, {setSubmitting}) => {
			setTimeout(() => {
				const results = values
				console.log((results))
				alert(JSON.stringify(values, null, 2))
				setSubmitting(false);
				}, 400);
		}}
	>
		<Form className="form--container">
			<label className = "FormLabel" htmlFor="firstName">First Name </label>
			<Field name="firstName" className = "form-input" type="text"/>
			<ErrorMessage name="firstName" />

			<label className = "FormLabel" htmlFor="lastName">First Name </label>
			<Field name="lastName"className = "form-input" type="text"/>
			<ErrorMessage name="lastName" />

			<label className = "FormLabel" htmlFor = "message">Let us know your thoughts!</label>
 			<Field name="message" as="textarea" className="form-textarea" />
			<ErrorMessage name= "message" />

			<label className = "FormLabel" htmlFor="email">First Name </label>
			<Field name="email"className = "form-input" type="email"/>
			<ErrorMessage name="email" />

			<Field name="colors" as="select" className="my-select">
			<option value="red">Red</option>
			<option value="green">Green</option>
			<option value="blue">Blue</option>
			</Field>

			<button  type="submit">GoForIt</button>
		</Form>

	</Formik>
	);
};


const SearchForm =() =>{
	return (
		<Formik 
			initialValues =  {{
			firstName: "",
			lastName: "",
			message: "",
			email: "",
			colors:"",
		}}

		validationSchema = {Yup.object({
			firstname: Yup.string()
				.max(15,"Must be 15 characters or less."),
				// .required("Did you forget your name?"),
			lastName: Yup.string()
				.max(15, "Must be 15 characters or less."),
				// .required("Did you forget your last name too?"),
			email: Yup.string().email("Invalid Email address"),
			message: Yup.string()
				.max(20,"Don't write so much.")
		})}

		onSubmit = {(values, {setSubmitting}) => {
			setTimeout(() => {
				const results = values
				console.log((results))
				alert(JSON.stringify(values, null, 2))
				setSubmitting(false);
				}, 400);
		}}
	>
		<Form className = "form-container">
			<label className="formLabel" htmlFor="firstName">First Name </label>
			<Field name="firstName" className = "form-input" type="text"/>
			<ErrorMessage name="firstName" />

			<label className="formLabel" htmlFor="lastName">Last Name </label>
			<Field name="lastName"className = "form-input" type="text"/>
			<ErrorMessage name="lastName" />

			<label className="formLabel" htmlFor = "message">Let us know your thoughts!</label>
 			<Field name="message" as="textarea" className="form-textarea" />
			<ErrorMessage name= "lastName" />

			<label className="formLabel" htmlFor="email">Email </label>
			<Field name="email"className = "form-input" type="email"/>
			<ErrorMessage name="email" />

			<label className="formLabel" htmlFor="colors">Choose a color </label>
			<Field name="colors" as="select" className="my-select">
			<option value="red">Red</option>
			<option value="green">Green</option>
			<option value="blue">Blue</option>
			</Field>

			<button  type="submit">GoForIt</button>
		</Form>

	</Formik>
	);
};




export {SearchForm, SearchFormV2}