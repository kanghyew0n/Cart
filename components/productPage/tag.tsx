import styled from "@emotion/styled";

type TagProps = {
    tag: string;
};

export const Tag = (props : TagProps) => {
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

