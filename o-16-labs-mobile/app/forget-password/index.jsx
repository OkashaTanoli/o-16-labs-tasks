import { Alert, StyleSheet, Text, View } from "react-native";
import { GradientButton, InputField, Wrapper } from "../../components";
import { MaterialIcons } from '@expo/vector-icons';
import { Link, useRouter } from "expo-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const formSchema = z.object({
    email: z.string().email('Please enter a valid email')
});


function ForgetPassword() {
    const router = useRouter();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: ''
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data) => {
        // Alert.alert("Data ==>> ", JSON.stringify(data))
        router.push(`/verification?email=${data.email}`)
    }

    return (
        <Wrapper>
            <View style={styles.titleContainer}>
                <Link href={'/'}><MaterialIcons name={'keyboard-backspace'} size={25} color="#1f1f1f" /></Link>
                <Text style={styles.title}>Forgot Password</Text>
            </View>

            <InputField
                style={{ marginTop: 25, marginBottom: 20 }}
                control={control}
                name={'email'}
                placeholder=""
                label={'Email'}
                keyboardType="email-address"
            />
            <GradientButton onPress={handleSubmit(onSubmit)} text={'NEXT'} />
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1F1F1F'
    },

})

export default ForgetPassword;