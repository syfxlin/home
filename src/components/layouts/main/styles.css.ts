import { styled } from "@syfxlin/reve";
import { theme } from "../../../theme/theme.css";

export const container = styled.css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: ${theme.fontSize.calc(45)};
  padding: 0 ${theme.spacing.calc(8)};
  animation: fade-in 0.5s ease;
`;
