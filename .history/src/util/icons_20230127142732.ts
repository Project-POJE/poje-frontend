type IconsType = {
  frontend: string[];
  backend: string[];
};

type IconsKeyType = keyof IconsType;

const icons: IconsType = {
  frontend: [],
  backend: [],
};

const iconFolderNames: IconsKeyType[] = ['frontend', 'backend'];
const ICON_PATH = '/public/public_assets/skill_icon';
iconFolderNames.forEach((folderName) => {
  console.log(`${ICON_PATH}/${folderName}`);
  const context = require.context(`${ICON_PATH}/${folderName}`, false);
  console.log(context);
  context.keys().map((i) => icons[folderName].push(context(i) as string));
});
export default icons;
