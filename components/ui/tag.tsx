import styled from "@emotion/styled";

type Props = {
    tag: string;
};

const Tag = (props : Props) => {
  return (
   <TagContainer>{props.tag}</TagContainer>
  )
}

const TagContainer = styled.div`
    padding: 10px 15px;
    border-radius: 50px;
    border: 1px solid #111;
    font-size: 14px;
    cursor: pointer;
`

export default Tag