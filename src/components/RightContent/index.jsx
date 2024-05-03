import { Button, Space } from 'antd';
import { QuestionCircleOutlined, DownloadOutlined } from '@ant-design/icons';
import { SelectLang, useModel } from '@umijs/max';
import Avatar from './AvatarDropdown';
import styles from './index.less';
import t from "@/utils/i18n";

const GlobalHeaderRight = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'realDark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>

      <Avatar />
      <SelectLang className={styles.action} />
    </Space>
  );
};
export default GlobalHeaderRight;
/*space下

 */


