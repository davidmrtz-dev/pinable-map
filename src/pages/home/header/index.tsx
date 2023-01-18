import styled from "styled-components";
import { Content } from "../../../@types";
import { MiddleContent } from "./MiddleContent";
import { TopContent } from "./TopContent";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = ({
  content,
  region
}: {
  content: Content | null;
  region: string;
}): JSX.Element =>  <HeaderContainer>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }}>
    <TopContent
      content={content}
      region={region}
    />
    <MiddleContent content={content} />
  </div>
</HeaderContainer>;

export default Header;




