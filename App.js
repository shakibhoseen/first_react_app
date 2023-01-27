
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
  return (
    <View style={styles.appContainer}>

      <GoalInput onAddGoal={addGoalHolder} />

      <View style={{ marginBottom: 30}}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              <GoalItem value={itemData.item} />
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
