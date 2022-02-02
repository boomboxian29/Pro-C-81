import CreateBottomTabNavigator from react-navigation/bottom-tabs
import Feed from "../Screens/Feed";
import CreatePost from "../Screens/CreatePost"

const Tab=CreateBottomTabNavigator();

const BottomTabNavigator = () =>{
    return(
        <Tab.Navigator
         screenOptions={({route}) => ({ 
             tabBarIcon: ({focused,color,size})=>
               let iconName;
               if (route.name==="Feed")  >
        </Tab.Navigator>
    )
}