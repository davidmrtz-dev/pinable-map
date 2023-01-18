import { Typography } from "antd";
import styled from "styled-components";
import { Content, Main, ThirdSection, Weather } from "../../../@types";
import { theme } from "../../../Theme";
import { capitalizeFirst, toCelsius } from "../../../utils";
import { LogoDict } from "../../../utils/Logos";

const ContentContainer = styled.div`
  display: flex;
  height: 150px;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 20px 0;
  border-radius: 10px;
  gap: 20px;
`;

const ContentItemWrapper = styled.div`
  background-color: rgb(111, 120, 123, .5);
  display: flex;
  min-width: calc(360px - (16px*2));
  height: 100%;
  opacity: 1;
  border-radius: 10px;
`;

export const MiddleContent = ({
  content
}: {
  content: Content | null
}): JSX.Element => {
  return(<ContentContainer>
    {content?.firstSection &&  <FirstSection item={content.firstSection}/>}
    {content?.secondSection &&  <SecondSection item={content.secondSection}/>}
    {content?.thirdSection &&  <LastSection item={content.thirdSection}/>}
  </ContentContainer>);
};

const LastSection = <T extends ThirdSection | undefined>({item}: {item:T}): JSX.Element => {
  return(<ContentItemWrapper>
    {item && (<div style={{
      width: '100%',
      height: '100%',
      display: 'flex'
    }}>
      <div style={{
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0'
      }}>
        <Typography style={{
          ...theme.texts.brandH4,
          color: theme.colors.lightWhite
        }}>
          WIND
        </Typography>
        <Typography style={{
          ...theme.texts.brandSubFont,
          color: theme.colors.lighterWhite
        }}>
          Wind speed: {item.speed}
        </Typography>
        <Typography style={{
          ...theme.texts.brandSubFont,
          color: theme.colors.lighterWhite
        }}>
          Wind deg: {item.deg}
        </Typography>
        <Typography style={{
          ...theme.texts.brandSubFont,
          color: theme.colors.lighterWhite
        }}>
          Wind gust: {item.gust}
        </Typography>
        <Typography style={{
          ...theme.texts.brandH4,
          color: theme.colors.lightWhite
        }}>
          RAIN
        </Typography>
        <Typography style={{
          ...theme.texts.brandSubFont,
          color: theme.colors.lighterWhite
        }}>
          1H: {item["1h"]}
        </Typography>
      </div>
    </div>)}
  </ContentItemWrapper>);
};

const SecondSection = ({ item }: { item: Main | undefined, }): JSX.Element => <ContentItemWrapper>
  {item && (<div style={{
    width: '100%',
    height: '100%',
    display: 'flex'
  }}>
    <div style={{
      flex: 1,
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 0'
    }}>
      <Typography style={{
        ...theme.texts.brandFont,
        color: theme.colors.lighterWhite
      }}>
        Temperature: {toCelsius(item.temp)}
      </Typography>
      <Typography style={{
        ...theme.texts.brandFont,
        color: theme.colors.lighterWhite
      }}>
        Feels like: {toCelsius(item.feels_like)}
      </Typography>
      <Typography style={{
        ...theme.texts.brandFont,
        color: theme.colors.lighterWhite
      }}>
        Min: {toCelsius(item.temp_min)}
      </Typography>
      <Typography style={{
        ...theme.texts.brandFont,
        color: theme.colors.lighterWhite
      }}>
        Max: {toCelsius(item.temp_max)}
      </Typography>
    </div>
  </div>)}
</ContentItemWrapper>;

const FirstSection = ({ item }: { item: Weather | undefined, }): JSX.Element => <ContentItemWrapper>
  {item && (<div style={{
    width: '100%',
    height: '100%',
    display: 'flex'
  }}>
    <div style={{
      flex: 1,
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '40px 0'
    }}>
      <Typography style={{
        ...theme.texts.brandH3,
        color: theme.colors.lighterWhite
      }}>{item.main}</Typography>
      <Typography style={{
        ...theme.texts.brandFont,
        color: theme.colors.lighterWhite
      }}>{capitalizeFirst(item.description)}</Typography>
    </div>
    <div style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {LogoDict[item?.icon as keyof typeof LogoDict || 'unknown']}
    </div>
  </div>)}
</ContentItemWrapper>;