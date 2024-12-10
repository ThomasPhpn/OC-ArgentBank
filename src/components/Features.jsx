import FeatureItem from "./FeatureItem";
import featuresData from "./featuresData.json";

const Features = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {featuresData.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default Features;
