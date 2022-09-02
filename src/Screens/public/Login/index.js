import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import Input from '../../../Components/inputs';
import Radio from '../../../Components/radio-button';
import { IMAGES } from '../../../Themes/Constants';
import { styles } from './styles';

const Login = () => {
    const [isEye, setEye] = useState(false);
    const data = ['US', 'EU'];
    const [formValues, setFormValues] = useState({
        email: null,
        password: null,
        country: 0
    })

    const submit = () => {
        console.log("submit", formValues);
    }

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
                        onChangeText={text => setFormValues({ ...formValues, password: text })}
                        placeholder={'Enter password'}
                        secureTextEntry={!isEye}
                        isSecure={true}
                        onClickEye={() => setEye(!isEye)}
                        isOpen={isEye}
                    />

                    <View style={styles.radioInput}>
                        <Radio data={data} selectedValue={formValues.country} onSelect={(value) => setFormValues({ ...formValues, country: value })} />
                    </View>

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => submit()
                        }
                    >
                        <Text style={styles.btnText}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
};

export default Login;

