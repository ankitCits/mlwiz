import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import { singIn, userDetails } from '../../../Api/auth';
import Input from '../../../Components/inputs';
import Radio from '../../../Components/radio-button';
import Colors from '../../../Themes/Colors';
import { IMAGES } from '../../../Themes/Constants';
import { styles } from './styles';
//import { isValidEmail } from '../../../Utils';
import AuthContext from '../../../Context/AuthContext';

const Login = () => {
  const { onAuthentication } = useContext(AuthContext);
  const [isEye, setEye] = useState(false);
  // const data = ['US', 'EU'];
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    // email: 'ankitp',
    // password: 'testdev123',
    // country: 0
  });

  const submit = async () => {
    setIsLoading(true);
    if (formValues.email.trim() == '') {
      ToastAndroid.showWithGravity(
        'Email address mandatory',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      setIsLoading(false);
      return;
    }
    if (formValues.password.trim() == '') {
      ToastAndroid.showWithGravity(
        'Password mandatory',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      setIsLoading(false);
      return;
    }
    // console.log(isValidEmail(formValues.email));
    // if(!isValidEmail(formValues.email))
    // {
    //     ToastAndroid.showWithGravity(
    //         'Invalid email address',
    //         ToastAndroid.LONG,
    //         ToastAndroid.TOP,
    //       );
    //       setIsLoading(false);
    //       return;
    // }
    try {
      const postData = {
        username: formValues.email,
        password: formValues.password,
      };
      const data = await singIn(postData);
      console.log('Login > submit > response', data.token);
      // set response 
      // await onAuthentication('ASDASD'); // Testing purpose
      setIsLoading(false);
      await onAuthentication(data.token);
      await userDetails()

    } catch (error) {
      console.log('Login > submit > Catch', error);
      ToastAndroid.showWithGravity(error, ToastAndroid.LONG, ToastAndroid.TOP);
      setIsLoading(false);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={IMAGES.logo} />
          </View>

          <Input
            labelText={'Email'}
            value={formValues.email}
            onChangeText={text => setFormValues({ ...formValues, email: text })}
            placeholder={'Enter email address'}
          />
          <Input
            labelText={'Password'}
            value={formValues.password}
            onChangeText={text =>
              setFormValues({ ...formValues, password: text })
            }
            placeholder={'Enter password'}
            secureTextEntry={!isEye}
            isSecure={true}
            onClickEye={() => setEye(!isEye)}
            isOpen={isEye}
          />
          {/* <View style={styles.radioInput}>
            <Radio
              data={data}
              selectedValue={formValues.country}
              onSelect={value => setFormValues({ ...formValues, country: value })}
            />
          </View> */}

          <TouchableOpacity
            style={styles.btn}
            onPress={() => submit()
            }
          >
            {isLoading == true ?
              (<ActivityIndicator size="small" color={Colors.WHITE} />)
              :
              (<Text style={styles.btnText}>
                Sign In
              </Text>)
            }
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;
