const AboutSection = () => {
    return (
        <section className="max-w-[66ch]">
            <p className="mb-6 font-sans text-section-sm text-text-1 lg:text-section">
                ramy abdulazziz •{" "}
                <bdi
                    lang="ar"
                    dir="rtl"
                    className="font-arabic text-ar-label-sm font-normal lg:text-ar-label"
                >
                    رامي عبدالعزيز
                </bdi>
            </p>
            <div className="space-y-6 text-body-sm text-text-2 lg:text-body">
                <p>
                    My passion is leveraging technology to solve complex
                    problems and improve people&apos;s lives. I recently
                    graduated from Stony Brook University with my B.S. in
                    Computer Science and Electrical Engineering.
                </p>
                <p>
                    I love digging into the weeds of systems to make
                    improvements to developer experiences. I enjoy learning
                    about Operating Systems, Computer Vision, Machine Learning,
                    and theoretical Computer Science.
                </p>
                <p>
                    I&apos;m based in NY and when I&apos;m not coding, you can
                    find me climbing the ladder in showdown and enjoying life
                    with my fiancé Shazia. Feel free to reach out with project
                    ideas, new opportunities, or to learn more about me.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
