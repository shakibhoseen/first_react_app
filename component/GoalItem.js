import { StyleSheet , Text, View} from "react-native";


function GoalItem(props) {

    return (
        <View style={styles.goalItem}>
        <Text style={{ color: "#fff", fontWeight: '700' }}>{props.value} </Text>
      </View>
    );
    
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        borderWidth: 2,
        borderColor: '#e2aa2f',
        //width: '70%',
        backgroundColor: '#48579c',
        padding: 8,
        borderRadius: 10,
        margin: 2,
      }
});