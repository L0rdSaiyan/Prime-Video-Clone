import { StyleSheet, TouchableOpacity, Image } from "react-native"
export default function MovieCards({movieURL, altText}){
    return(
        <>
            <TouchableOpacity>
                <Image style={styles.img} source={movieURL} alt={altText}></Image>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    img: 
    {
        marginLeft: 20,

    }
})