import React, { useRef, useState } from 'react';
import { 
    View, 
    StyleSheet, 
    ImageBackground,
    Text,
    TouchableOpacity 
} from 'react-native';
import {
    IndicatorViewPager, PagerDotIndicator
} from "@shankarmorwal/rn-viewpager";
import { MaterialIcons } from '@expo/vector-icons';
import Intro from './Intro';
import Login from './Login';

const IntroTitles = [
    "질문을 통해 서로를 이해하고\n함께 꽃을 키워나가요.",
    "러뷰의 꽃은 사랑을 먹고 자라요.",
    "러뷰의 꽃은 사랑을 먹고 자라요.",
    "함께 쌓은 사랑은 서로를\n위해 사용해요.",
    "준비가 되었다면,\n시작해 볼까요?"
]

const IntroContents = [
    "하루에 한 번, 연인과 함께 질문에 답하며\n우리의 역사를 기록해보세요.",
    "답변을 기록할 때마다 꽃이 조금씩 성장해요.\n다양하고 아름다운 꽃의 엠블럼을 수집해 보세요.",
    "어느덧 밤 하늘이\n우리의 추억으로 빛날거예요.",
    "출석과 미션을 수행할 때마다 하트 보상이 주어져요.\n하트를 이용해 러뷰를 더욱 알차게 즐겨보아요!"
]

const GettingStart = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const viewPagerRef = useRef()

    const onSkipPressed = () => {
        if(viewPagerRef.current !== undefined) {
            viewPagerRef.current.setPage(4)
        }
    }

    return (
        <View style={Styles.container}>
            <ImageBackground style={Styles.imageContainer} source={require("../../assets/images/backgrounds/getting_start_background.png")}>
                <IndicatorViewPager
                    style={Styles.viewPager}
                    indicator={RenderingDotIndicator(currentIndex)}
                    onPageSelected={(index) => setCurrentIndex(index.position)}
                    ref={viewPagerRef} >
                    <View style={Styles.viewPagerItem}>
                        <Intro title={IntroTitles[0]} content={IntroContents[0]} />
                    </View>
                    <View style={Styles.viewPagerItem}>
                        <Intro title={IntroTitles[1]} content={IntroContents[1]} />
                    </View>
                    <View style={Styles.viewPagerItem}>
                        <Intro title={IntroTitles[2]} content={IntroContents[2]} />
                    </View>
                    <View style={Styles.viewPagerItem}>
                        <Intro title={IntroTitles[3]} content={IntroContents[3]} />
                    </View>
                    <View style={Styles.viewPagerItem}>
                        <Login title={IntroTitles[4]}/>
                    </View>
                </IndicatorViewPager>

                {currentIndex !== 4 && (
                    <TouchableOpacity style={Styles.skipButton} onPress={onSkipPressed}>
                        <Text style={{ color: "#C4C4C4", fontSize: 18, fontWeight: "300" }}>Skip</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="#C4C4C4" />
                    </TouchableOpacity>
                )}
            </ImageBackground>
        </View>
    );
};

const RenderingDotIndicator = (currentIndex) => {
    return <PagerDotIndicator 
                pageCount={currentIndex === 4 ? 0 : 5} 
                dotStyle={Styles.defaultDotStyle} 
                selectedDotStyle={Styles.selectedDotStyle} 
                style={Styles.dotContainer} />
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121116"
    },
    imageContainer: {
        flex: 1
    },
    viewPager: {
        flex: 1
    },
    viewPagerItem: {
        flex: 1  
    },
    dotContainer: {
        marginBottom: 32  
    },
    skipButton: {
        position: "absolute",
        bottom: 40,
        right: 24,
        display: "flex",
        flexDirection: "row"
    },
    defaultDotStyle: {
        width: 12,
        height: 12,
        borderRadius: 12,
        borderColor: "#8995CD",
        borderWidth: 1,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: "#00000000"
    },
    selectedDotStyle: {
        width: 12,
        height: 12,
        borderRadius: 12,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: "#8995CD"
    }
})

export default GettingStart;