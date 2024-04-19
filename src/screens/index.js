import {Text, Image, StyleSheet, View} from "react-native"
import primeVideoLogo from "../assets/prime_video.png"
import amazonLogo from "../assets/amazon_logo.png"
export const Home = () =>
{
    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <Image style={styles.primeLogoImg} source={primeVideoLogo}/>
                <Image style={styles.amazonLogoImg} source={amazonLogo}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#232F3E",
    },
    header:
    {

    },
    primeLogoImg:
    {

    },
    amazonLogoImg:
    {

    },
})