

export default function Title ({h2Text, pText, bgColor = 'defaultColor', h2Color = 'defaultBg1', pColor = 'defaultBg2'}) {

    const colorMap = {
        defaultColor: 'defaultColor',
        blueColor: 'blueColor',
    };

    const colorMap1 = {
        defaultColor: 'defaultBg1',
        blueColor: 'blueBg1',
    };

    const colorMap2 = {
        defaultColor: 'defaultBg2',
        blueColor: 'blueBg2',
    };

    const bgColorClass = colorMap[bgColor] || colorMap.defaultColor;
    const h2ColorClass = colorMap1[h2Color] || colorMap1.defaultColor;
    const pColorClass = colorMap2[pColor] || colorMap2.defaultColor;

    return (
        <div className={`title ${bgColorClass}`}>
                    <h2 className={`title__div-title-1 ${h2ColorClass}`}>{h2Text}</h2>
        <p className={`title__div-title-2 ${pColorClass}`} data-aos="fade-right">{pText}</p>
        </div>
    )
}