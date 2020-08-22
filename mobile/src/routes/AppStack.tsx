import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import ConfirmedRegistration from '../pages/ConfirmedRegistration';
import MicrolearningIntro from '../pages/MicrolearningIntro'
import MainScreenManager from '../manager/MainScreenManager';
import PendingEvaluationsManager from '../manager/PendingEvaluationsManager';
import IndicateSomeoneManager from '../manager/IndicateSomeoneManager';
import CompletedIndicationManager from '../manager/CompletedIndicationManager';
import SelfEvaluationManager from '../manager/SelfEvaluationManager';
import ValidateOrRefuse from '../manager/ValidateOrRefuse';
import ValidatedIndication from '../manager/ValidateOrRefuse/ValidatedIndication';
import RefusedIndication from '../manager/ValidateOrRefuse/RefusedIndication';
import DashboardManager from '../manager/DashboardManager';
import FlexibilityManager from '../manager/QuestionnaireManager/FlexibilityManager';
import ComplexProblemsSolvingManager from '../manager/QuestionnaireManager/ComplexProblemsSolvingManager';
import EmotionalIntelligenceManager from '../manager/QuestionnaireManager/EmotionalIntelligenceManager';
import JudgmentDecisionMakingManager from '../manager/QuestionnaireManager/JudgmentDecisionMakingManager';
import PeopleManagement from '../manager/QuestionnaireManager/PeopleManagement';
import CompletedQuestionnaireManager from '../manager/CompletedQuestionnaireManager';
import MainScreenCollaborator from '../collaborator/MainScreenCollaborator';
import FeedbackManager from '../manager/FeedbackManager';


const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return ( //headerShown: false desabilita o cabeçalho padrão
        <NavigationContainer> 
            <Navigator screenOptions={{ headerShown: false }}> 
                <Screen name="Landing" component={Landing} />
                <Screen name="Login" component={Login} />
                <Screen name="MicrolearningIntro" component={MicrolearningIntro} />
                <Screen name="Registration" component={Registration} />
                <Screen name="ConfirmedRegistration" component={ConfirmedRegistration} />

                <Screen name="MainScreenManager" component={MainScreenManager} />
                <Screen name="PendingEvaluationsManager" component={PendingEvaluationsManager} />
                <Screen name="IndicateSomeoneManager" component={IndicateSomeoneManager} />
                <Screen name="CompletedIndicationManager" component={CompletedIndicationManager} />
                <Screen name="SelfEvaluationManager" component={SelfEvaluationManager} />
                <Screen name="ValidateOrRefuse" component={ValidateOrRefuse} />
                <Screen name="ValidatedIndication" component={ValidatedIndication} />
                <Screen name="RefusedIndication" component={RefusedIndication} />
                <Screen name="DashboardManager" component={DashboardManager} />
                
                <Screen name="FlexibilityManager" component={FlexibilityManager} />
                <Screen name="ComplexProblemsSolvingManager" component={ComplexProblemsSolvingManager} />
                <Screen name="EmotionalIntelligenceManager" component={EmotionalIntelligenceManager} />
                <Screen name="JudgmentDecisionMakingManager" component={JudgmentDecisionMakingManager} />
                <Screen name="PeopleManagement" component={PeopleManagement} />
                <Screen name="FeedbackManager" component={FeedbackManager} />
                <Screen name="CompletedQuestionnaireManager" component={CompletedQuestionnaireManager} />

                <Screen name="MainScreenCollaborator" component={MainScreenCollaborator} />
      
                </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;