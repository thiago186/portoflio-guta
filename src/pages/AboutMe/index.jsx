import React from "react";

import Navbar from "../../components/Navbar";

import "./AboutMePage.css";


function AboutMePage() {
    const theme="dark";
    const firstText="Hoje vou contar uma história\nDe uma guria arretada\nFoi buscada lá no Sul\nPor uma família interessada\nForam quatro mil quilômetros\nAté chegar em sua morada\n\nJá na primeira visita\nO avô ela conquistou\nDoutor em cirurgia plástica\nPelo nariz se encantou\nEra a sua netinha caçula\nDe bolinha a apelidou\n\nNa fase de adolescência\nAos estudos se dedicou\nNão queria saber de paquera\nMas um vôlei sempre gostou";
    const secondText="No quesito profissão\nTinha uma vocação\nO que ela sonhava mesmo\nEra fazer Computação\n\nConquistou a sua aprovação\nMas não sentia uma realização\nQueria de fato uma criação\nQue impactasse a população\n\nCom resiliência e determinação, \nesta guria arretada enfrentou,\nOs desafios da vida, \ncom coragem, nunca se abalou.\nPercorreu sua jornada, \ncom amor e gratidão,\nprestes a finalizar as faculdade\ncom dedicação.";
    const thirdText="duas graduações, \num feito notável a conquistar,\nNo mercado de trabalho, \nela está pronta para se destacar.\nCom excelência como meta, \nela segue seu caminho,\nPronta para encarar o mundo,\nsem medo, sem tino.\n\nCom versos rimados e alegria,\nEncerro esta história arretada,\nQue nos trouxe emoção e magia,\nDe uma guria tão determinada.\n\nAgora é hora de partir,\nSeguir adiante, sem cessar,\nCom sonhos prontos para florir,\nE novos desafios enfrentar.";

    return (
        <div className="aboutme-wrapper">
            <div className="aboutme-page-container">
                <Navbar theme={theme}/>
                <div className="aboutme-tittle">About Me</div>
                <div className="aboutme-description-container">
                    <div className="aboutme-text">{firstText}</div>
                    <div className="aboutme-text">{secondText}</div>
                    <div className="aboutme-text">{thirdText}</div>
                </div>
                <div className="airplanes-container">
                    <img className="aboutme-figures" src="aboutme-figures.png" alt="Decorative figures" />
                </div>
            </div>
        </div>
    );
}



export default AboutMePage;