import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TextInputComponent, View } from 'react-native';

function GoalInput(params) {
    const [enterGoalText, setGoalText] = useState('');

    function globalInputHolder(enterText) {
        setGoalText(enterText);
      }


      function onGoalHandeler() {
         params.onAddGoal(enterGoalText);
         setGoalText('');
      }


     


    return (
        <View style={styles.inputContainer}>
        <View style={{ flexDirection: 'row', paddingBottom: 10, }}>
          <TextInput
            style={styles.textInput}
            placeholder='Enter your text'
            onChangeText={globalInputHolder}
            value={enterGoalText}
          />
        </View>

        <Button title='Tap me again!' onPress={onGoalHandeler} ></Button>
      </View>
    );


    
}


export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#a20de7',
        paddingBottom: 10,
      },
    
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        //width: '70%',
        flex: 1,
        marginRight: 8,
        padding: 8,
        borderRadius: 10,
      },
});


