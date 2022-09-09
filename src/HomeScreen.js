import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Menu from '../assets/images/menu.svg';
import Language from '../assets/images/Group 975.svg';
import Notification from '../assets/images/Group 977.svg';
import Wifi from '../assets/images/Wifi.svg';
import Battery from '../assets/images/Battery.svg';
import Network from '../assets/images/Cellular Connection.svg';
import Edit from '../assets/images/Path 48.svg';
import MyCropData from './Data/MyCropData';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import SwiperData from './Data/SwiperData';
import DemoFarm from '../assets/images/Group 868.svg';
import Book from '../assets/images/Book.svg';
import Franchisees from '../assets/images/franchisees.svg';
import Outline from '../assets/images/Outline.svg';
import Doctor from '../assets/images/Group 903.svg';
import MandiData from './Data/MandiData';
import Ruppes from '../assets/images/path7.svg';
import Up from '../assets/images/Group 217.svg';
import Down from '../assets/images/Group 218.svg';
import Rain from '../assets/images/Layer 2.svg';
import Distance from '../assets/images/Group.svg';
import Weather from '../assets/images/Group 196.svg';
import Circle from '../assets/images/Group 349.svg';
import Person from '../assets/images/Person.svg';
import KrishiData from './Data/KrishiData';

const {height, width} = Dimensions.get('window');
const MYCROPDATA = MyCropData;
const SWIPERDATA = SwiperData;
const MANDIDATA = MandiData;
const KRISHIDATA = KrishiData;

const HomeScreen = () => {
  const _renderMyCrop = ({item}) => {
    return (
      <View style={styles.myCropItemView}>
        <Image source={item.image} style={styles.myCropItemImage} />
        <Text style={styles.myCropItemTitle}>{item.title}</Text>
      </View>
    );
  };

  const _renderMandi = ({item}) => {
    return (
      <View style={styles.mandiItemView}>
        <Image source={item.image} style={styles.mandiItemImage} />
        <View style={styles.mandiTitleView}>
          <Text style={styles.mandiItemTitle}>{item.title}</Text>
          <View style={styles.mandiLocationView}>
            <Text style={styles.mandiLocationText}>{item.location}</Text>
            <View style={styles.mandiPriceView}>
              <Ruppes width={10} height={10} />
              <Text style={styles.mandiPriceText}>{item.price}</Text>
            </View>
          </View>
          <View style={styles.mandiHorizontalLine} />
          <View style={styles.mandiLocationView}>
            <Up style={styles.mandiUpImage} />
            <Ruppes width={10} height={10} />
            <Text style={styles.mandiPriceText}>{item.up}</Text>
            <View style={styles.mandiPriceView}>
              <Down style={styles.mandiUpImage} />
              <Ruppes width={10} height={10} />
              <Text style={styles.mandiPriceText}>{item.down}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const _renderKrishi = ({item}) => {
    return (
      <View style={styles.krishiCardView}>
        <Image source={item.image} style={styles.krishiCardImage} />
        <Text style={styles.krishiCardTitle}>{item.title}</Text>
        <Text style={styles.krishiCardChild}>{item.child}</Text>
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar hidden />
      <View style={styles.headerView}>
        <View style={styles.headerTopView}>
          <Image
            source={require('../assets/images/9.41.png')}
            style={styles.timeImage}
          />
          <View style={styles.headerRightView}>
            <Network style={styles.networkImage} />
            <Wifi style={styles.networkImage} />
            <Battery style={styles.networkImage} />
          </View>
        </View>
        <View style={styles.headerBottomView}>
          <Menu width={25} height={25} />
          <View style={styles.headerRightView}>
            <Language style={styles.languageImage} />
            <Notification />
          </View>
        </View>
      </View>
      <View style={styles.myCropsTitleView}>
        <Text style={styles.myCropsTitleText}>My Crops</Text>
        <View style={styles.myCropsEditView}>
          <Text style={styles.myCropsEditText}>Edit</Text>
          <Edit style={styles.myCropsEditImage} />
        </View>
      </View>
      <View style={styles.myCropFlatlist}>
        <FlatList
          data={MYCROPDATA}
          renderItem={_renderMyCrop}
          keyExtractor={(item, index) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.swiperView}>
        <SwiperFlatList
          autoplay
          autoplayDelay={5}
          autoplayLoop
          index={0}
          showPagination={true}
          paginationDefaultColor={'#fff'}
          paginationActiveColor={'#417E39'}
          paginationStyleItemInactive={{borderWidth: 1, borderColor: '#4f4f4f'}}
          paginationStyleItem={{marginTop: 35}}
          data={SWIPERDATA}
          renderItem={({item}) => (
            <View>
              <Image source={item.image} style={styles.swiperImage} />
              <Text style={styles.swiperText}>
                We Help To Double{'\n'}Farmer's income.
              </Text>
            </View>
          )}
        />
      </View>
      <View style={styles.demoFarmMainView}>
        <View style={styles.demoFarm3View}>
          <View style={styles.demoFarmView}>
            <DemoFarm style={styles.demofarmImage} />
            <Text style={styles.demofarmText}>Demo Farm</Text>
          </View>
          <View style={styles.demoFarmView}>
            <Franchisees style={styles.demofarmImage} />
            <Text style={styles.demofarmText}>Franchisees</Text>
          </View>
        </View>
        <View style={styles.demoFarm3View}>
          <View style={styles.rewardView}>
            <Outline style={styles.demofarmImage} />
            <Text style={styles.rewardText}>
              Use{'\n'}Reward{'\n'}Point
            </Text>
          </View>
          <Text style={styles.reward200Text}>200</Text>
        </View>
        <View style={styles.demoFarm3View}>
          <View style={styles.demoFarmView}>
            <Book style={styles.demofarmImage} />
            <Text style={styles.demofarmText}>Krishi Book</Text>
          </View>
          <View style={styles.demoFarmView}>
            <Doctor style={styles.demofarmImage} />
            <Text style={styles.demofarmText}>Krishi Doctor</Text>
          </View>
        </View>
      </View>
      <View style={styles.MandiView}>
        <View style={styles.myCropsTitleView}>
          <Text style={styles.myCropsTitleText}>Today's Mandi Price</Text>
          <View style={styles.myCropsEditView}>
            <Text style={styles.myCropsEditText}>View All</Text>
          </View>
        </View>
        <View style={styles.mandiFlatlist}>
          <FlatList
            data={MANDIDATA}
            renderItem={_renderMandi}
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.tempView}>
        <View style={styles.tempLeftView}>
          <View style={styles.tempLeftTopView}>
            <Text style={styles.maxTemp36}>36{'  '}C</Text>
            <Text style={styles.maxTempDeg}>o</Text>
            <Text style={styles.maxTempText}>Maximum Temp.</Text>
          </View>
          <View style={styles.tempLeftBottomView}>
            <Weather width={30} height={30} />
            <View>
              <Text style={styles.tempLeftBottomText}>
                Today's Weather of{' '}
                <Text style={styles.tempLeftBottomTextBold}>Surat</Text>
              </Text>
              <Text style={styles.tempLeftBottomText}>
                09th March, 2022 Tuesday
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.tempRightView}>
          <View style={styles.tempLeftTopView}>
            <Text style={styles.maxTemp36}>36{'  '}C</Text>
            <Text style={styles.maxTempDeg}>o</Text>
            <Text style={styles.maxTempText}>Maximum Temp.</Text>
          </View>
          <View style={styles.tempRightBottomView}>
            <View style={styles.tempRightBottomMiniView}>
              <Rain />
              <Text style={styles.tempLeftBottomText}>
                Chance of rain{' '}
                <Text style={styles.tempLeftBottomTextBold}>0%</Text>
              </Text>
            </View>
            <View style={styles.tempRightBottomMiniView}>
              <Distance />
              <Text style={styles.tempLeftBottomText}>
                20 km/hr | North West
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.completeProfileView}>
        <Text style={styles.completeProfileText}>Complete Your Profile</Text>
        <View style={styles.completeProfileBottomView}>
          <View style={styles.completeProfileStepView} />
          <View style={styles.unCompleteProfileStepView} />
          <View style={styles.unCompleteProfileStepView} />
          <View style={styles.unCompleteProfileStepView} />
          <View style={styles.unCompleteProfileStepView} />
          <View style={styles.unCompleteProfileStepView} />
          <View style={styles.unCompleteProfileStepView} />
          <View>
            <Circle />
            <Person
              width={15}
              height={15}
              color={'#417E39'}
              style={styles.personImage}
            />
          </View>
        </View>
      </View>
      <View style={styles.completeProfileView}>
        <Text style={styles.completeProfileText}>GROWiT Products</Text>
        <View style={styles.growitCardView}>
          <Image
            source={require('../assets/images/Rectangle1544.jpg')}
            style={styles.growitImage}
          />
          <View style={styles.growitCardRightView}>
            <Text style={styles.growitCardRightTitle}>Mulch</Text>
            <Text style={styles.growitCardRightChild}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </Text>
          </View>
        </View>
        <View style={styles.growitSecondCardView}>
          <Image
            source={require('../assets/images/Rectangle1545.jpg')}
            style={styles.growitImage}
          />
          <View style={styles.growitSecondCardRightView}>
            <Text style={styles.growitCardRightTitle}>Plant Cover</Text>
            <Text style={styles.growitSecondCardRightChild}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </Text>
          </View>
        </View>
        <View style={styles.growitCardView}>
          <Image
            source={require('../assets/images/Rectangle1546.jpg')}
            style={styles.growitImage}
          />
          <View style={styles.growitCardRightView}>
            <Text style={styles.growitCardRightTitle}>
              Fiber Stick for Plant Cover
            </Text>
            <Text style={styles.growitCardRightChild}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </Text>
          </View>
        </View>
        <View style={styles.growitSecondCardView}>
          <Image
            source={require('../assets/images/Rectangle1547.jpg')}
            style={styles.growitImage}
          />
          <View style={styles.growitSecondCardRightView}>
            <Text style={styles.growitCardRightTitle}>Bunch Cover</Text>
            <Text style={styles.growitSecondCardRightChild}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.krishiView}>
        <Text style={styles.krishiTitleText}>Krishi News</Text>
        <View style={styles.krishiFilter}>
          <FlatList
            data={KRISHIDATA}
            renderItem={_renderKrishi}
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerView: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#417E39',
    paddingVertical: 8,
  },
  headerTopView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  timeImage: {
    width: 28,
    height: 18,
    marginLeft: 5,
  },
  headerRightView: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
    alignItems: 'center',
  },
  networkImage: {
    marginRight: 5,
  },
  headerBottomView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  languageImage: {
    marginRight: 10,
  },
  myCropsTitleView: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 15,
    alignItems: 'center',
  },
  myCropsTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#417E39',
  },
  myCropsEditView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#417E39',
    paddingHorizontal: 12,
    paddingVertical: 2,
    position: 'absolute',
    right: 0,
  },
  myCropsEditText: {
    fontSize: 16,
    color: '#fff',
  },
  myCropsEditImage: {
    marginLeft: 8,
  },
  myCropFlatlist: {
    marginTop: 10,
    marginHorizontal: 15,
    alignItems: 'center',
  },
  myCropItemView: {
    marginRight: 20,
    alignItems: 'center',
  },
  myCropItemImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  myCropItemTitle: {
    fontSize: 16,
    color: '#000',
  },
  swiperView: {
    marginBottom: 6,
    marginHorizontal: 15,
    marginTop: 10,
  },
  swiperImage: {
    width: width / 1.08,
    height: 180,
    borderRadius: 15,
  },
  swiperText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    position: 'absolute',
    top: 50,
  },
  demoFarmMainView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 30,
    justifyContent: 'center',
  },
  demoFarm3View: {
    flex: 1,
    alignItems: 'center',
  },
  demoFarmView: {
    width: width / 3.45,
    height: 120,
    backgroundColor: '#DCEFD9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  demofarmImage: {
    marginTop: 10,
  },
  demofarmText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 3,
  },
  rewardView: {
    width: width / 3.45,
    height: 200,
    backgroundColor: '#DCEFD9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  rewardText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  reward200Text: {
    fontSize: 30,
    color: '#417E39',
    fontWeight: 'bold',
  },
  MandiView: {
    backgroundColor: '#DCEFD9',
    marginTop: 10,
    paddingBottom: 20,
  },
  mandiFlatlist: {
    marginTop: 10,
    alignItems: 'center',
  },
  mandiItemView: {
    width: width / 1.3,
    flexDirection: 'row',
    borderRadius: 15,
    marginTop: 5,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 13,
    marginRight: 5,
  },
  mandiItemImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  mandiTitleView: {
    marginLeft: 10,
  },
  mandiItemTitle: {
    fontSize: 20,
    color: '#417E39',
    fontWeight: 'bold',
  },
  mandiLocationView: {
    width: width / 2.1,
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  mandiLocationText: {
    fontSize: 16,
    color: '#000',
  },
  mandiPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
  },
  mandiPriceText: {
    fontSize: 13,
    color: '#000',
  },
  mandiHorizontalLine: {
    width: width / 2.1,
    height: 1,
    marginTop: 5,
    backgroundColor: '#4f4f4f',
  },
  mandiUpImage: {
    marginRight: 3,
  },
  tempView: {
    borderWidth: 2,
    borderColor: '#417E39',
    borderRadius: 15,
    marginTop: 20,
    marginHorizontal: 15,
    paddingVertical: 15,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  tempLeftView: {
    width: width / 1.98,
  },
  tempLeftTopView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  maxTemp36: {
    color: '#417E39',
    fontSize: 13,
    fontWeight: 'bold',
  },
  maxTempDeg: {
    fontSize: 9,
    color: '#417E39',
    fontWeight: 'bold',
    position: 'absolute',
    left: 15,
    top: -2,
  },
  maxTempText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 10,
  },
  tempLeftBottomView: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempLeftBottomText: {
    fontSize: 13,
    color: '#000',
    marginLeft: 5,
    marginTop: 3,
  },
  tempLeftBottomTextBold: {
    color: '#417E39',
    fontWeight: 'bold',
  },
  tempRightView: {
    flex: 1,
  },
  tempRightBottomView: {
    marginTop: 15,
  },
  tempRightBottomMiniView: {
    flexDirection: 'row',
    marginTop: 3,
  },
  completeProfileView: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  completeProfileText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#417E39',
    marginTop: 5,
  },
  completeProfileBottomView: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  completeProfileStepView: {
    borderRadius: 5,
    width: 40,
    height: 15,
    backgroundColor: '#417E39',
    marginRight: 8,
  },
  unCompleteProfileStepView: {
    borderRadius: 5,
    width: 40,
    height: 15,
    backgroundColor: '#DCEFD9',
    marginRight: 8,
  },
  personImage: {
    position: 'absolute',
    top: 8,
    left: 5,
  },
  growitCardView: {
    borderWidth: 1,
    borderColor: '#4f4f4f',
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  growitImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  growitCardRightView: {
    marginLeft: 10,
  },
  growitCardRightTitle: {
    fontSize: 16,
    color: '#417E39',
    fontWeight: 'bold',
  },
  growitCardRightChild: {
    width: width / 1.6,
    fontSize: 10.5,
    color: '#000',
    marginTop: 3,
  },
  growitSecondCardView: {
    borderWidth: 1,
    borderColor: '#4f4f4f',
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row-reverse',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  growitSecondCardRightView: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  growitSecondCardRightChild: {
    width: width / 1.6,
    fontSize: 10.5,
    color: '#000',
    marginTop: 3,
    textAlign: 'right',
  },
  krishiView: {
    marginTop: 15,
    marginBottom: 90,
  },
  krishiTitleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#417E39',
    marginTop: 5,
    marginHorizontal: 15,
  },
  krishiFilter: {
    marginTop: 10,
    alignItems: 'center',
  },
  krishiCardView: {
    backgroundColor: '#DCEFD9',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: width / 1.4,
    paddingBottom: 15,
    marginLeft: 13,
    marginRight: 5,
  },
  krishiCardImage: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  krishiCardTitle: {
    fontSize: 13,
    color: '#417E39',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 15,
  },
  krishiCardChild: {
    fontSize: 10.5,
    color: '#000',
    marginHorizontal: 10,
    marginTop: 5,
  },
});
