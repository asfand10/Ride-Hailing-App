import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import InputForm from '../../utils/forms/input';

import ValidationRules from '../../utils/forms/validationRules';

import {connect} from 'react-redux';
import {signUp,signIn} from '../../store/actions/user_actions';
import {bindActionCreators} from 'redux';

import {setTokens} from '../../utils/misc';

class AuthForm extends React.Component{

    state={
        type:'Login',
        action:'Login',
        actionMode:'I want to register',
        hasErrors:false,
        form:{
            email:{
                value:"",
                valid:false,
                type:"textInput",
                rules:{
                    isRequired:true,
                    isEmail:true
                }

            },
            password:{
                value:"",
                valid:false,
                type:"textInput",
                rules:{
                    isRequired:true,
                    minLength:6
                }
            },
            confirmPassword:{
                value:"",
                valid:false,
                type:"textInput",
                rules:{
                    confirmPass:'password',
                }
            }
        }
    }


    updateInput = (name,value)=>{
        this.setState({
            hasErrors:false,

        });
        let formCopy = this.state.form; //Never ever mutate the state, always make a copy and then update the entire state
        formCopy[name].value = value;

        let rules = formCopy[name].rules;
        let valid = ValidationRules(value,rules,formCopy);
        
        console.log(valid);
        formCopy[name].valid = valid
        
        this.setState({
            form : formCopy
        })
    }

    confirmPassword = ()=> (

        this.state.type != 'Login' ? 

        <InputForm
                    placeholder="Confirm Password"
                    placeholderTextColor="#0e0e0e"
                    type={this.state.form.confirmPassword.type}
                    value={this.state.form.confirmPassword.value}
                    onChangeText={ value=>this.updateInput("confirmPassword",value)}
                    secureTextEntry
        /> : null
    )

    formHasErrors = () =>(
        this.state.hasErrors ? 
            <View style={styles.errorContainer}>
                <Text style={styles.errorLabel}>Incorrect password or email</Text>
            </View>
        : null
    )

    submitForm = () =>{
        let isFormValid = true;
        let formToSubmit = {};
        const formCopy = this.state.form;
        for(let key in formCopy){
            if(this.state.type === 'Login'){
                if(key !== 'confirmPassword'){
                    isFormValid = isFormValid && formCopy[key].valid;
                    formToSubmit[key] = formCopy[key].value;
                }
            }
            else{
                isFormValid = isFormValid && formCopy[key].valid;
                formToSubmit[key] = formCopy[key].value;
            }
        }

        if(isFormValid){
            if(this.state.type === 'Login'){
                this.props.signIn(formToSubmit).then(()=>{
                    this.manageAccess()
                })
            }
            else{
                this.props.signUp(formToSubmit).then(()=>{
                    this.manageAccess()
                })
            }
        }
        else{
            this.setState({
                hasErrors:true
            })
        }
    }

    changeFormMode = () => {
        const type = this.state.type;
        this.setState({
            type: type === 'Login' ? 'Register' : 'Login',
            action: type === 'Login' ? 'Register' : 'Login',
            actionMode: type === 'Login' ? 'Already have an account? Login' : 'I want to Register'
        })
    }

    manageAccess = () =>{
        if(!this.props.User.auth.uid){
            this.setState({
                hasErrors:false
            })
            this.props.goNext();
        }
        else{
            setTokens(this.props.User.auth,()=>{
                this.setState({hasErrors:false})
                this.props.goNext();

            } )
        }
    }

    render(){
        return(
            <View>
                <InputForm
                    placeholder="Enter email"
                    placeholderTextColor="#0e0e0e"
                    autoCapitalize={"none"}
                    type={this.state.form.email.type}
                    value={this.state.form.email.value}
                    keyboardType={"email-address"}
                    onChangeText={ value=>this.updateInput("email",value)}
                />

                <InputForm
                    placeholder="Enter your password"
                    placeholderTextColor="#0e0e0e"
                    type={this.state.form.password.type}
                    value={this.state.form.password.value}
                    onChangeText={ value=>this.updateInput("password",value)}
                    secureTextEntry
                />

                {this.confirmPassword()}

                {this.formHasErrors()}

                <View style={{marginTop:20}}>
                    <View style={styles.button}>
                    <Button
                        title={this.state.action}
                        onPress={this.submitForm}
                        color='#000'
                    />
                    </View>
                    <View style={styles.button}>
                    <Button
                        title={this.state.actionMode}
                        onPress={this.changeFormMode}
                        color='#000'
                    />
                    </View>
                    <View style={styles.button}>
                    <Button
                        title="Register Later?"
                        onPress={()=>this.props.goNext()}
                        color='#000'
                    />
                    </View>
                </View>

            </View>
            

        )
    }
}

const styles = StyleSheet.create({
    errorContainer:{
        marginBottom:10,
        marginTop:30,
        padding:10,
        backgroundColor:'#f44336'
    },
    errorLabel:{
        color:'#fff',
        textAlignVertical:'center',
        textAlign:'center'
    },
    button:{
        marginBottom:10,
        marginTop:10
    }
})

function mapStateToProps(state){
    console.log(state)
    return {
        User: state.User 
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({signIn, signUp}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthForm);


