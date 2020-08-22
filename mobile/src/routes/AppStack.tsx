import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import ConfirmedRegistration from '../pages/ConfirmedRegistration';
import MainScreen from '../pages/MainScreen';
import PendingEvaluations from '../pages/PendingEvaluations';
import SelfEvaluation from '../pages/SelfEvaluation';
import MicrolearningIntro from '../pages/MicrolearningIntro'
import IndicateSomeone from '../pages/IndicateSomeone';
import CompletedIndication from '../pages/CompletedIndication';
import ValidateOrRefuse from '../pages/ValidateOrRefuse';
import ValidatedIndication from '../pages/ValidateOrRefuse/ValidatedIndication';
import RefusedIndication from '../pages/ValidateOrRefuse/RefusedIndication';
import Dashboard from '../pages/Dashboard';
import ComplexProblemsSolving from '../pages/Questionnaire/ComplexProblemsSolving';
import EmotionalIntelligence from '../pages/Questionnaire/EmotionalIntelligence';
import Flexibility from '../pages/Questionnaire/Flexibility';
import JudgmentDecisionMaking from '../pages/Questionnaire/JudgmentDecisionMaking';
import PeopleManagement from '../pages/Questionnaire/PeopleManagement';
import CompletedQuestionnaire from '../pages/CompletedQuestionnaire';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return ( //headerShown: false desabilita o cabeçalho padrão
        <NavigationContainer> 
            <Navigator screenOptions={{ headerShown: false }}> 
                <Screen name="Landing" component={Landing} />
                <Screen name="Login" component={Login} />
                <Screen name="MicrolearningIntro" component={MicrolearningIntro} />
                <Screen name="CreateAccount" component={Registration} />
                <Screen name="ConfirmedRegistration" component={ConfirmedRegistration} />

                <Screen name="MainScreen" component={MainScreen} />
                <Screen name="PendingEvaluations" component={PendingEvaluations} />
                <Screen name="IndicateSomeone" component={IndicateSomeone} />
                <Screen name="CompletedIndication" component={CompletedIndication} />
                <Screen name="SelfEvaluation" component={SelfEvaluation} />
                <Screen name="ValidateOrRefuse" component={ValidateOrRefuse} />
                <Screen name="ValidatedIndication" component={ValidatedIndication} />
                <Screen name="RefusedIndication" component={RefusedIndication} />
                <Screen name="Dashboard" component={Dashboard} />

                <Screen name="Flexibility" component={Flexibility} />
                <Screen name="ComplexProblemsSolving" component={ComplexProblemsSolving} />
                <Screen name="EmotionalIntelligence" component={EmotionalIntelligence} />
                <Screen name="JudgmentDecisionMaking" component={JudgmentDecisionMaking} />
                <Screen name="PeopleManagement" component={PeopleManagement} />
                <Screen name="CompletedQuestionnaire" component={CompletedQuestionnaire} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;