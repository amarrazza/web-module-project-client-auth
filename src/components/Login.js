import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


// class Login extends React.Component {
//     state = {
//       credentials: {
//         username: '',
//         password: ''
//       }
//     };
  
//     handleChange = e => {
//       this.setState({
//         credentials: {
//           ...this.state.credentials,
//           [e.target.name]: e.target.value
//         }
//       });
//     };
  
//     login = e => {
//       e.preventDefault();
//       console.log(this.state.credentials);
  
//       axios.post('http://localhost:9000/api/login', this.state.credentials)
//         .then(resp=> {
//           console.log(resp);
          
//           localStorage.setItem("token", resp);
//           this.props.history.push("/friends")

//         })
//         .catch(err=> {
//           console.log(err);
//         });
//     };
  
//     render() {
//       return (
//         <div>
//           <form onSubmit={this.login}>
//             <input
//               type="text"
//               name="username"
//               value={this.state.credentials.username}
//               onChange={this.handleChange}
//             />
//             <input
//               type="password"
//               name="password"
//               value={this.state.credentials.password}
//               onChange={this.handleChange}
//             />
//             <button>Log in</button>
//           </form>
//         </div>
//       );
//     }
//   }

// export default Login;



const Login = () => {
    const { push } = useHistory();
    const [ credentials, setCredentials ] = useState({
            username: "",
            password: ""
        })

    const handleChange = (e) => {
        
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        // console.log(credentials);
        axios.post('http://localhost:9000/api/login', credentials)
            .then(resp => {
                console.log(resp);
                localStorage.setItem("token", resp.data.token);
                push("/friends");
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder='username'
                />
                <input 
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder='password'
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;