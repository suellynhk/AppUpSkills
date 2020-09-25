import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import PageHeader from "../../components/PageHeader";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { BorderlessButton, ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

import rightIcon from "../../assets/images/icons/right.png";
import videoIcon from "../../assets/images/icons/video.png";
// import { WebView } from "react-native-webview";
import { Video } from "expo-av";

function MicrolearningIntro() {
  const { navigate } = useNavigation();
  // const html = "http://cezarlamann.github.io/iframevid?v=-6SV4BiS4AA";
  const [shouldPlay, setShouldPlay] = useState(true);
  const [positionMillis, setPositionMillis] = useState(0);
  function handleNavigateToCreateAccountPage() {
    setShouldPlay(false);
    setPositionMillis(0);
    navigate("Registration");
  }

  useFocusEffect(() => {
    setShouldPlay(true);
    setPositionMillis(0);

    return function cleanup() {
      setShouldPlay(false);
      setPositionMillis(0);
    };
  });

  return (
    <View style={styles.container}>
      <PageHeader />
      <View style={styles.insideBox}>
        <ScrollView>
          <Image source={videoIcon} style={styles.videoIcon} />
          <Text style={styles.labelText}>Olá!</Text>
          <Text style={styles.microlearningText}>
            {"  "}Preparamos uma breve explicação sobre as Soft Skills e sobre
            este aplicativo para você ficar por dentro do assunto!
          </Text>

          <Video
            source={require("../../assets/microlearning-intro.mp4")}
            rate={1.0}
            positionMillis={positionMillis}
            volume={0.5}
            resizeMode={Video.RESIZE_MODE_CONTAIN}
            shouldPlay={shouldPlay}
            isLooping={false}
            useNativeControls={true}
            style={{ width: "100%", height: 180 }}
          />
          {/* <WebView
            allowsFullscreenVideo
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction={
              Platform.OS !== "android" || Platform.Version >= 17
                ? false
                : undefined
            }
            userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
            javaScriptEnabled
            scrollEnabled={false}
            source={{
              uri: html,
            }}
            style={{
              width: "100%",
              alignSelf: "center",
              justifyContent: "center",
              height: 360,
            }}
          /> */}
          <View style={styles.button}>
            <BorderlessButton onPress={handleNavigateToCreateAccountPage}>
              <Image source={rightIcon} style={styles.rightIcon} />
            </BorderlessButton>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default MicrolearningIntro;
