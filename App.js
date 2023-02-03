
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import GoalInput from './component/GoalInput';
import GoalItem from './component/GoalItem';


export default function App() {

  const [courseGoal, setCourseGoal] = useState([]);



  function addGoalHolder(enterGoalText) {
    setCourseGoal(cuurrentcourseGoal => [...cuurrentcourseGoal, enterGoalText]);
    //globalInputHolder(''); 
  }


  function onDeleteItem(index) {
    console.log("delete"+ index);
    const arr = [];

    for (let i = 0, p=0; i < courseGoal.length; i++) {
      if(index==i) continue;
      arr[p] = courseGoal[i];
      p++;
    }
    setCourseGoal(arr);
  }
  return (
    <View style={styles.appContainer}>

      <GoalInput onAddGoal={addGoalHolder} />

      <View style={{ marginBottom: 30}}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              <GoalItem value={itemData.item} onDeleteItem={onDeleteItem}  index={itemData.index} />
            );
          }}
          keyExtractor={(item, index) => {
            return index;
          }}
          alwaysBounceVertical={false}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    //flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },



});
