import styles from '../styles';

const Projects = ({ imgUrl, title, subtitle, link }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <a href={link} alt='resource' target="_blank">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#c0c2c2]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
    </a>
  </div>
);

export default Projects;