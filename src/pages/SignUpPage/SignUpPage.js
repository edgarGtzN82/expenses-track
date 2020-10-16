import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import '../../Layout/Navigation/Nav.css'
import firebase from '../../firebase';
import { message } from 'antd';
import initialCatalog from '../../data/initialCatalog';

const SignUpPage = () => {
   
    const onSignUp = (newUser) => {
        console.log(newUser); 
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then((user) => {
                console.log(user);
                firebase.firestore().collection('users').doc(user.user.uid).set({
                    name: newUser.nickname
                })
                    .then(() => {
                        console.log("Nuevo Usuario Creado");
                        let categoryRef = null;
                        const batch = firebase.firestore().batch();
                        initialCatalog.forEach(cat => {
                            categoryRef = firebase.firestore().collection('/users/' + user.user.uid + '/categories/').doc();
                            batch.set(categoryRef, cat);
                        });
                        batch.commit()
                        .then(() => console.log('Catalogo Creado'));
                    })
                    .catch(err => {
                        console.error("Error adding document: ", err);
                    });
            })
            .catch(err => {
                message.error({
                    content: err.message,
                    style: {
                        marginTop: '20vh'
                    },
                });
                console.log(err);
            });
    }
   
    return (
    <div className='app-content' >
        <SignUpForm 
            onSignUp={onSignUp} />
    </div>
    )
};

export default SignUpPage;


