import React from "react";
import { isAuthenticated } from '../../auth';
import Joi from "joi-browser";
import Form from "../common/form";
import { create } from './apiProject'

class ReadEditProject extends Form {
state = {
    formType: '',
    data: {
        title: "",
        description: "",
    },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    description: Joi.string()
      .required()
        .label("Description"),
    type: Joi.string()
        .required()
        .label('Type'),
    completed: Joi.string()
        .required()
        .label('Completed')
    
  };

  componentDidMount() {
     this.setState({ user: isAuthenticated().user });

    const projectId = this.props.match.params.id;
      if (projectId === "new") {
          this.setState({ formType: 'new' }); return;
      }

    // const movie = getMovie(movieId);
    // if (!movie) return this.props.history.replace("/not-found");

    // this.setState({ data: this.mapToViewModel(movie) });
  }

  handleAdd = async (data) => {

      const userId = isAuthenticated().user._id;
      const token = isAuthenticated().token;
		try {
			await create(userId, token, data);
			// window.location = '/';
		//	toast.success("Success - you have registered");
		} catch (e) {
			if (e.response && e.response.status === 400) {
				const errors = { ...this.state.error };
				errors.name = "Sorry there was a problem, please use a different email";
				this.setState({ errors });
			}
		}
	};

	doSubmit = () => {
		const data = this.state.data;
		this.handleAdd(data);
	};

//   mapToViewModel(movie) {
//     return {
//       _id: movie._id,
//       title: movie.title,
//       genreId: movie.genre._id,
//       numberInStock: movie.numberInStock,
//       dailyRentalRate: movie.dailyRentalRate
//     };
//   }

    // doSubmit = () => {
    //     console.log('submitted');
    // // saveMovie(this.state.data);
        
    //     const userId = isAuthenticated().user._id;
    //     const token = isAuthenticated().token;
      
    //     create(userId, token, data).then(data => {
    //         if (data.error) this.setState({ error: data.error });
    //         else {
    //         //     this.setState({
    //         //         loading: false,
    //         //         title: "",
    //         //         description: "",
    //         //         type: "",
    //         //         completed: "",
    //         //         redirectToPatient: true
    //         //     });
    //        }
    //     });

    // this.props.history.push("/movies");
//  };

    render() {
      
        const { formType } = this.state;
        const formTitle = formType === 'new' ? 'New Project' : 'Edit Project';

      return (
          <section className="bg-secondary py-4">
              <div className="container">
                  <br /><br /><br /><br />
                  <h1 className="text-center text-white">{formTitle} </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("description", "Description")}
          {this.renderInput("type", "Type")}
          {this.renderInput("completed", "Completed")}
          {this.renderButton("Save")}
        </form>
          </div>
      </section>
    );
  }
}

export default ReadEditProject;