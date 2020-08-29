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
import EvaluateColleaguesManager from '../manager/EvaluateColleaguesManager';
import RefusedEvaluationManager from '../manager/RefusedEvaluationManager';
import EvaluateTeamManager from '../manager/EvaluateTeamManager';
import FlexibilityCollaborator from '../collaborator/QuestionnaireCollaborator/FlexibilityCollaborator';
import ComplexProblemsSolvingCollaborator from '../collaborator/QuestionnaireCollaborator/ComplexProblemsSolvingCollaborator';
import EmotionalIntelligenceCollaborator from '../collaborator/QuestionnaireCollaborator/EmotionalIntelligenceColaborator';
import JudgmentDecisionMakingCollaborator from '../collaborator/QuestionnaireCollaborator/JudgmentDecisionMakingCollaborator';
import FeedbackCollaborator from '../collaborator/FeedbackCollaborator';
import CompletedQuestionnaireCollaborator from '../collaborator/CompletedQuestionnaireCollaborator';
import PendingEvaluationsCollaborator from '../collaborator/PendingEvaluationsCollaborator';
import IndicateSomeoneCollaborator from '../collaborator/IndicateSomeoneCollaborator';
import CompletedIndicationCollaborator from '../collaborator/CompletedIndicationCollaborator';
import SelfEvaluationCollaborator from '../collaborator/SelfEvaluationCollaborator';
import RefusedEvaluationCollaborator from '../collaborator/RefusedEvaluationCollaborator';
import EvaluateColleaguesCollaborator from '../collaborator/EvaluateColleaguesCollaborator';
import EvaluateIndicationsCollaborator from '../SkillsScreenButtons/EvaluateIndicationsCollaborator';
import EvaluateIndicationsManager from '../SkillsScreenButtons/EvaluateIndicationsManager';
import ComplexProblemsButtonManager from '../SkillsScreenButtons/QuestionsButtonsManager/ComplexProblemsButtonManager';
import EmotionalIntelligenceButtonManager from '../SkillsScreenButtons/QuestionsButtonsManager/EmotionalIntelligenceButtonManager';
import FlexibilityButtonManager from '../SkillsScreenButtons/QuestionsButtonsManager/FlexibilityButtonManager';
import JudgmentButtonManager from '../SkillsScreenButtons/QuestionsButtonsManager/JudgmentButtonManager';
import PeopleManagementButton from '../SkillsScreenButtons/QuestionsButtonsManager/PeopleManagementButton';
import FeedbackEvaluationsManager from '../SkillsScreenButtons/QuestionsButtonsManager/FeedbackEvaluationsManager';
import FeedbackEvaluations from '../SkillsScreenButtons/QuestionsButtonsCollaborator/FeedbackEvaluations';
import ComplexProblemsButton from '../SkillsScreenButtons/QuestionsButtonsCollaborator/ComplexProblemsButton';
import EmotionalIntelligenceButton from '../SkillsScreenButtons/QuestionsButtonsCollaborator/EmotionalIntelligenceButton';
import FlexibilityButton from '../SkillsScreenButtons/QuestionsButtonsCollaborator/FlexibilityButton';
import JudgmentButton from '../SkillsScreenButtons/QuestionsButtonsCollaborator/JudgmentButton';
import FlexibilityButton2 from '../SkillsScreenButtons/QuestionsButtonsCollaborator2/FlexibilityButton2';
import ComplexProblemsButton2 from '../SkillsScreenButtons/QuestionsButtonsCollaborator2/ComplexProblemsButton2';
import JudgmentButton2 from '../SkillsScreenButtons/QuestionsButtonsCollaborator2/JudgmentButton2';
import EmotionalIntelligenceButton2 from '../SkillsScreenButtons/QuestionsButtonsCollaborator2/EmotionalIntelligenceButton2';
import ComplexProblemsButtonManager2 from '../SkillsScreenButtons/QuestionsButtonsManager2/ComplexProblemsButtonManager2';
import EmotionalIntelligenceButtonManager2 from '../SkillsScreenButtons/QuestionsButtonsManager2/EmotionalIntelligenceButtonManager2';
import FlexibilityButtonManager2 from '../SkillsScreenButtons/QuestionsButtonsManager2/FlexibilityButtonManager2';
import JudgmentButtonManager2 from '../SkillsScreenButtons/QuestionsButtonsManager2/JudgmentButtonManager2';
import PeopleManagementButton2 from '../SkillsScreenButtons/QuestionsButtonsManager2/PeopleManagementButton2';
import EvaluateIndicationsCollaborator2 from '../SkillsScreenButtons/EvaluateIndicationsCollaborator2';
import EvaluateIndicationsManager2 from '../SkillsScreenButtons/EvaluateIndicationsManager2';



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
                <Screen name="EvaluateIndicationsCollaborator" component={EvaluateIndicationsCollaborator} />
                <Screen name="EvaluateIndicationsManager" component={EvaluateIndicationsManager} />

                <Screen name="MainScreenManager" component={MainScreenManager} />
                <Screen name="PendingEvaluationsManager" component={PendingEvaluationsManager} />
                <Screen name="IndicateSomeoneManager" component={IndicateSomeoneManager} />
                <Screen name="CompletedIndicationManager" component={CompletedIndicationManager} />
                <Screen name="SelfEvaluationManager" component={SelfEvaluationManager} />
                <Screen name="ValidateOrRefuse" component={ValidateOrRefuse} />
                <Screen name="ValidatedIndication" component={ValidatedIndication} />
                <Screen name="RefusedIndication" component={RefusedIndication} />
                <Screen name="DashboardManager" component={DashboardManager} />
                <Screen name="EvaluateColleaguesManager" component={EvaluateColleaguesManager} />
                <Screen name="RefusedEvaluationManager" component={RefusedEvaluationManager} />
                <Screen name="EvaluateTeamManager" component={EvaluateTeamManager} />

                <Screen name="FlexibilityManager" component={FlexibilityManager} />
                <Screen name="ComplexProblemsSolvingManager" component={ComplexProblemsSolvingManager} />
                <Screen name="EmotionalIntelligenceManager" component={EmotionalIntelligenceManager} />
                <Screen name="JudgmentDecisionMakingManager" component={JudgmentDecisionMakingManager} />
                <Screen name="PeopleManagement" component={PeopleManagement} />
                <Screen name="FeedbackManager" component={FeedbackManager} />
                <Screen name="CompletedQuestionnaireManager" component={CompletedQuestionnaireManager} />
                <Screen name="ComplexProblemsButtonManager" component={ComplexProblemsButtonManager} />
                <Screen name="EmotionalIntelligenceButtonManager" component={EmotionalIntelligenceButtonManager} />
                <Screen name="FlexibilityButtonManager" component={FlexibilityButtonManager} />
                <Screen name="JudgmentButtonManager" component={JudgmentButtonManager} />
                <Screen name="PeopleManagementButton" component={PeopleManagementButton} />
                <Screen name="FeedbackEvaluationsManager" component={FeedbackEvaluationsManager} />

                <Screen name="MainScreenCollaborator" component={MainScreenCollaborator} />
                <Screen name="PendingEvaluationsCollaborator" component={PendingEvaluationsCollaborator} />
                <Screen name="IndicateSomeoneCollaborator" component={IndicateSomeoneCollaborator} />
                <Screen name="CompletedIndicationCollaborator" component={CompletedIndicationCollaborator} />
                <Screen name="SelfEvaluationCollaborator" component={SelfEvaluationCollaborator} />
                <Screen name="RefusedEvaluationCollaborator" component={RefusedEvaluationCollaborator} />
                <Screen name="EvaluateColleaguesCollaborator" component={EvaluateColleaguesCollaborator} />
                <Screen name="FlexibilityCollaborator" component={FlexibilityCollaborator} />
                <Screen name="ComplexProblemsSolvingCollaborator" component={ComplexProblemsSolvingCollaborator} />
                <Screen name="EmotionalIntelligenceCollaborator" component={EmotionalIntelligenceCollaborator} />
                <Screen name="JudgmentDecisionMakingCollaborator" component={JudgmentDecisionMakingCollaborator} />
                <Screen name="FeedbackCollaborator" component={FeedbackCollaborator} />
                <Screen name="CompletedQuestionnaireCollaborator" component={CompletedQuestionnaireCollaborator} />
                <Screen name="FlexibilityButton" component={FlexibilityButton} />
                <Screen name="FeedbackEvaluations" component={FeedbackEvaluations} />
                <Screen name="ComplexProblemsButton" component={ComplexProblemsButton} />
                <Screen name="JudgmentButton" component={JudgmentButton} />
                <Screen name="EmotionalIntelligenceButton" component={EmotionalIntelligenceButton} />
               
                <Screen name="FlexibilityButton2" component={FlexibilityButton2} />
                <Screen name="ComplexProblemsButton2" component={ComplexProblemsButton2} />
                <Screen name="JudgmentButton2" component={JudgmentButton2} />
                <Screen name="EmotionalIntelligenceButton2" component={EmotionalIntelligenceButton2} />
                <Screen name="ComplexProblemsButtonManager2" component={ComplexProblemsButtonManager2} />
                <Screen name="EmotionalIntelligenceButtonManager2" component={EmotionalIntelligenceButtonManager2} />
                <Screen name="FlexibilityButtonManager2" component={FlexibilityButtonManager2} />
                <Screen name="JudgmentButtonManager2" component={JudgmentButtonManager2} />
                <Screen name="PeopleManagementButton2" component={PeopleManagementButton2} />
                <Screen name="EvaluateIndicationsCollaborator2" component={EvaluateIndicationsCollaborator2} />
                <Screen name="EvaluateIndicationsManager2" component={EvaluateIndicationsManager2} />
                </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;