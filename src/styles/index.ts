import { css, sx } from '@/utils/css';

export const styles = {
  container: css({
    marginTop: 32,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  title: sx({
    fontSize: 60,
  }),
  button: sx({
    color: 'white',
  }),
};
