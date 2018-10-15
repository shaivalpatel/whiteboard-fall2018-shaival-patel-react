import CourseServiceSingleton from '../services/CourseServiceSingleton'

const widgets = (state = {widgets:[], preview:false}, action) => {

    switch (action.type) {
        case "INIT":
            return {
                widgets: CourseServiceSingleton.findWidgetsForTopic(action.topic),
                preview:state.preview,
                selectedTopic: action.topic
            };
        case "FIND_ALL_WIDGETS_FOR_TOPIC":{
            return {
                widgets: CourseServiceSingleton.findWidgetsForTopic(action.topic),
                selectedTopic: action.topic
            }
        }

        case "CREATE_WIDGET":{

            CourseServiceSingleton.createWidget(state.selectedTopic,action.widget);
            return{
                widgets:CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic).slice(0),
                selectedTopic:state.selectedTopic

            }

        }

        case 'CHANGE_PREVIEW':{

            return {
                widgets:state.widgets,
                preview: !state.preview,
                selectedTopic:state.selectedTopic
            }}


        case "MOVE_UP":{

            CourseServiceSingleton.moveUp(state.selectedTopic, action.widget, action.index);
           return {
                widgets:CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic).slice(0),
               selectedTopic:state.selectedTopic
           }
        }

        case "MOVE_DOWN":{

            CourseServiceSingleton.moveDown(state.selectedTopic, action.widget, action.index);
            return {
                widgets:CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic).slice(0),
                selectedTopic:state.selectedTopic
            }
        }

        case"FIND_WIDGET": {
            return {
                widgets:CourseServiceSingleton.findWidget(action.widget.id),
                selectedTopic:state.selectedTopic
        }
        }

        case "DELETE_WIDGET":
            CourseServiceSingleton.deleteWidget(state.selectedTopic, action.widget);
            const newWidgets = CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic);
            return {
                widgets: newWidgets.slice(0),
                selectedTopic: state.selectedTopic
            };
        case "UPDATE_WIDGET":
            CourseServiceSingleton.updateWidget(state.selectedTopic, action.widget);
            return {
                widgets: CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic).slice(0),
                selectedTopic: state.selectedTopic
            };

        default:
            return state
    }
};

export default widgets