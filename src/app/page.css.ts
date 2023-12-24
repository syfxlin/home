import { styled } from "@syfxlin/reve";
import { theme } from "../theme/theme.css";

export const container = styled.css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const header = styled.css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${theme.spacing.calc(4)};
`;

export const avatar = styled.css`
  margin-left: 0;
  margin-right: 0;
  width: ${theme.size.calc(30)};
  height: ${theme.size.calc(30)};
  border-radius: ${theme.borderRadius.half};
  filter: ${theme.color.image.filter};
  transition: filter 0.3s;
`;

export const author = styled.css`
  font-size: ${theme.fontSize.calc(2.2)};
  line-height: ${theme.lineHeight.tight};
  letter-spacing: ${theme.letterSpacing.wider};
  font-weight: ${theme.fontWeight.bold};
  margin: ${theme.spacing.calc(2)} 0 0 0;
  color: ${theme.color.text.title};
`;

export const intro = styled.css`
  font-size: ${theme.fontSize.calc(0.9)};
`;

export const links = styled.css`
  margin-top: ${theme.spacing.calc(4)};
  display: flex;
  gap: ${theme.spacing.calc(4)};

  a {
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.calc(1)};
  }
`;
