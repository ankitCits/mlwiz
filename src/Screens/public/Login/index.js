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
        email: 'abc@gmail.com',
        password: '123456',
        country: ''
    })

    const submit = () => {
        console.log("submit", formValues);
    }

    return (
        <>
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Image
                            style={styles.img}
                            source={IMAGES.logo}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <Input
                            placeHolder='Email'
                            value={formValues.email}
                            onChangeText={text => setFormValues({ ...formValues, email: text })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <Input
                            value={formValues.email}
                            secureTextEntry={!isEye}
                            isSecure={true}
                            onClickEye={() => setEye(!isEye)}
                            isOpen={isEye}
                            placeHolder='Password'
                            onChangeText={text => setFormValues({ ...formValues, password: text })}
                        />
                    </View>
                    <View style={styles.radioInput}>
                        <Radio data={data} onSelect={(value) => setFormValues({ ...formValues, country: value })} />
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

