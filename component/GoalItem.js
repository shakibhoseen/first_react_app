import { Pressable, StyleSheet, Text, View } from "react-native";


function GoalItem(props) {


  function OnDeleteItem() {
    console.log(props.index);
     props.onDeleteItem(props.index);
  }

 

  return (
    <Pressable onPress={OnDeleteItem} android_ripple={{color: '#0dcc1d'}}>
      <View style={styles.goalItem}>
        <Text style={{ color: "#fff", fontWeight: '700' }}>{props.value} </Text>
      </View>
    </Pressable>
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