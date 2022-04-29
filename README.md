# Virulence

## Table of Contents

1. [Introduction](#introduction)
2. [Scenario](#scenario)
3. [Original Datasets and Mashup](#original-datasets-and-mashup)
    1. [Original Datasets](#original-datasets)
    2. [Mashup Dataset](#mashup-dataset)
4. [Data Analysis](#data-analysis)
    1. [Quality Analysis](#quality-analysis)
    2. [Legal Analysis](#legal-analysis)
    3. [Technical Analysis](#technical-analysis)
        1. [1:COVID](#covid)
        2. [2:POP](#pop)
        3. [3:PM10](#pm10)
        4. [4:SUP](#sup)
        5. [5:AGE](#age)
    4. [Sustainability](#sustainability)
5. [Website and Data Visualization](#website-and-data-visualization)
6. [Conclusion](#conclusion)

## <a name="#introduction"> 1. Introduction</a>
The goal of this website is to explain, in a comprehensible way, the evolution of the disease COVID-19 in Italy throughout the last 2 years (2020-2021), focusing our attention on the causes that made our country one of the most affected by the pandemic, and how these causes influenced each other in the process. We are going to take into consideration many aspects of the virus that have probably been underestimated or ignored at first, in order to provide people a clear idea of what COVID-19 is and which countermeasures could be adopted to deal with it. Virulence (that's the name of the project) aims to tell this story through a proper use of legal and ethical analysis, metadata exploitation and datasets cleaning, in order to provide a neat mashup of all the information sources gathered during the research steps. For convenience, the work has been split into 4 parts:

- Metadata, featuring the Virulence dataset compared with original datasets from other sources
- Visualization, where data results are represented through comprehensible maps and graphs
- Documentation, where every step of the research is explained
- License, a page featuring all the legal permits the projects needed to be completed

## <a name="#scenario"> 2. Scenario</a>
Why did COVID-19 spread so rapidly in Italy, making us reach one of the highest death rates in the world? There was the need to look at the conditions that made it possible, gathering information through data and articles from multiple sources. It is often demonstrated that the most relevant events may originate from the most unexpected causes. We will indeed have the chance to look at them carefully.

Now we are gonna discuss the many aspects taken into consideration during the research. The following list has been considered for all the 20 italian regions:

- Air pollution due to PM10 (<a href="https://discomap.eea.europa.eu/App/AirQualityStatistics/index.html" rel="nofollow">link here</a>)
- Winter temperatures ()
- Mobility (<a href="https://www.google.com/covid19/mobility/" rel="nofollow">link here</a>)
- Density and age of population (<a href="https://data.humdata.org/dataset/italy-high-resolution-population-density-maps-demographic-estimates" rel="nofollow">link here</a>)
- Density of health facilities()

## <a name="#original-datasets-and-mashup">3. Original Datasets and Mashup</a>


### <a name="#original-datasets">3.1 Original Datasets</a>

The datasets used for our project. In the next sections we are going to analyze them from various points of view.


|ID     |FILE                                       |DESCRIPTION                                                                                                                                                                                                |DATASET                                                              |CATALOGUE                                                              |URI                                                                                                                                                                       |LICENSE                                        |LAST UPDATE      |DOWNLOADED      |
|-------|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|-----------------|----------------|
|1:COVID|dpc-covid-19-ita-regioni.csv               |COVID-19 data for every italian region. We took the cases and deaths of the first pandemic wave (february to may 2020).                                                                                    |COVID-19 Monitoraggio situazione Italia (RNDT - Serie) - Versione 2.0|RNDT - Repertorio Nazionale dei Dati Territoriali - Servizio di ricerca|https://github.com/pcm-dpc/COVID-19/blob/master/dati-regioni/dpc-covid19-ita-regioni.csv                                                                                  |https://creativecommons.org/licenses/by/4.0/   |December 10, 2021|January 12, 2022|
|2:POP  |DCIS_POPORESBIL1_12012022143315331.csv     |Population of every italian region in 2019. We only took the ‘popolazione inizio periodo’ row from the database.                                                                                           |Popolazione residente - bilancio                                     |I.Stat                                                                 |http://dati.istat.it/viewhtml.aspx?il=blank&vh=0000&vf=0&vcq=1100&graph=0&view-metadata=1&lang=it&QueryId=18461&metadata=DCIS_POPORESBIL1                                 |https://creativecommons.org/licenses/by/3.0/it/|                 |February 8, 2022|
|3:PM10 |DataExtract.csv                            |PM10 mean level of 2019 for every italian station that measure it. We calculated the mean of all the values of the stations in the same italian region and created a single value for every italian region.|Air quality annual statistics calculated by the EEA                  |Air Quality e-Reporting (AQ e-Reporting)                               |https://discomap.eea.europa.eu/App/AirQualityStatistics/index.html?Country=Italy&AirPollutant=PM10&DataAggregationProcess=Annual mean / 1 calendar year&ReportingYear=2019|https://creativecommons.org/licenses/by/4.0/   |February 18, 2022|March 10, 2022  |
|4:SUP  |DCCV_CARGEOMOR_ST_COM_27032022165808849.csv|The total area of land for every italian region calculated at the beginning of 2020. We used it, together with the data about the population, to calculated the population density.                        |Superfici territoriali                                               |I.Stat                                                                 |http://dati.istat.it/Index.aspx?DataSetCode=DCCV_CARGEOMOR_ST_COM#                                                                                                        |https://creativecommons.org/licenses/by/3.0/it/|                 |March 27, 2022  |
|5:AGE  |DCIS_INDDEMOG1_28032022142732546.csv       |The age mean of the population of every italian region in 2019.                                                                                                                                            |Indicatori demografici                                               |I.Stat                                                                 |http://dati.istat.it/Index.aspx?DataSetCode=DCIS_INDDEMOG1#                                                                                                               |https://creativecommons.org/licenses/by/3.0/it/|                 |March 28, 2022  |




### <a name="#mashup-dataset">3.2 Mashup Dataset</a>

**ID**:

0:VIR

**URIs**:

We decided to publish the data in CSV, JSON and RDF format.

**Metadata**:

**Last update**:

**Description**:

For each italian region the dataset contains: region name, region istat code, covid-19 cases at the beginning of the pandemic, covid-19 deaths at the beginning of the pandemic, covid-19 cases at the beginning of the pandemic for every 100.000 people, covid-19 deaths at the beginning of the pandemic for every 100.000 people, pm10 level mean of 2019, the population density in 2019, the average age of the population in 2019, ...

**Methodology**:

We manipulated and merged the data coming from the previously described datasets and followed the [italian guidelines for the enhancement of public information assets](https://docs.italia.it/italia/daf/lg-patrimonio-pubblico/it/bozza/index.html), pairing our merged data with the appropriate metadata about both the original and mashup datasets.

## <a name="#data-analysis"> 4. Data Analysis</a>
### <a name="#quality-analysis"> 4.1 Quality Analysis</a>

linee guida valorizzazione patrimonio informativo pubblico

accuracy, coherence, completeness, currentness

### <a name="#legal-analysis"> 4.2 Legal Analysis</a>

privacy, license

### <a name="#technical-analysis"> 4.3 Technical Analysis</a>

formats, metadata, uris, provenance

#### <a name="#covid"> 1:COVID</a> 

**Formats**:

[CSV](https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv)

**Provenance**:

The [COVID-19 Github repository](https://github.com/pcm-dpc/COVID-19) made available by the italian Protezione Civile.

**Metadata**: 

We first found the metadata available in the same repository (this [XML file](https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/metadata/covid-19-monitoraggio.xml)), which was not in the DCAT-AP standard but in the RNDT standard, which is a standard used for territorial data in Italy.

Then, in this [md file](https://github.com/pcm-dpc/COVID-19/blob/master/dati-andamento-covid19-italia.md) of the description of the dataset we found [this link](https://geodati.gov.it/geoportale/visualizzazione-metadati/scheda-metadati/?uuid=PCM%3ACOVID-19%3A05032020%3A093000) to the metadata in the [geodati.gov.it](http://geodati.gov.it) site. Ignoring the fact that it is not possible to access to the actual RDF file of this metadata, we realized that it was more updated than the github one. So the github XML file was old and not updated metadata.

Doing more research we found [this manual](https://geodati.gov.it/geoportale/images/struttura/documenti/GeoDCAT-AP_IT-v1.0.pdf), which explains that the territorial data which is also open can be “translated” to the DCAT-AP IT standard through the GeoDCAT-AP IT specific. And that the version of the metadata in the DCAT-AP IT standard could be found at [dati.gov.it](http://dati.gov.it).

So we searched for the dataset in [dati.gov.it](http://dati.gov.it) catalogue and we found [this](https://www.dati.gov.it/view-dataset/dataset?id=327cbe0a-4737-4e2c-9567-c7d90f69570b), once again it was not possible to access the actual metadata file in RDF. Browsing the site more carefully we found [this page](https://dati.gov.it/elenco-harvest-sources) and  finally found the [download URL](https://geodati.gov.it/geodcat-ap_it/index.php?outputTransformation=dcatap_it&inputFormat=CSW&outputFormat=XML&src=request%3DGetRecords%26service%3DCSW%26version%3D2.0.2%26resultType%3Dresults%26outputSchema%3Dhttp%3A%2F%2Fwww.isotc211.org%2F2005%2Fgmd%26outputFormat%3Dapplication%2Fxml%26typeNames%3Dcsw%3ARecord%26elementSetName%3Dfull%26constraintLanguage%3DFilter%26constraint_language_version%3D1.1.0%26startPosition%3D1%26maxRecords%3D6000%26Constraint%3D%3CFilter%3E%3CPropertyIsLike%20wildCard%3D%22*%22%20singleChar%3D%22_%22%20escapeChar%3D%22%2F%22%3E%3CPropertyName%3EOpenData%3C%2FPropertyName%3E%3CLiteral%3Etrue%3C%2FLiteral%3E%3C%2FPropertyIsLike%3E%3C%2FFilter%3E) of the RDF metadata of all the datasets in the [geodati.gov.it](http://geodati.gov.it) catalogue, including the COVID-19 one.

Concluding, finding the right metadata for a government dataset should not be this complicated and long search and it should have been made available in the Github repository.

#### <a name="#pop"> 2:POP</a>

**Formats**:

Excel, CSV, PC-Axis, SDMX

There is no real download URI for any of the formats.

**Provenance**:

[I.Stat](http://dati.istat.it), the ISTAT database.

**Metadata**:

There is some [metadata](http://dati.istat.it/OECDStat_Metadata/ShowMetadata.ashx?Dataset=DCIS_POPORESBIL1&Lang=it) next the data presented in the tool, but it follows no official standard. So we made it ourselves, gathering information from the ISTAT site and following the DCAT-AP IT standard.

#### <a name="#pm10"> 3:PM10</a>

**Formats**:

CSV, TSV, JSON

There is no real download URI for any format.

**Provenance**:

[Air Quality e-Reporting](https://www.eea.europa.eu/data-and-maps/data/aqereporting-9) by the European Environment Agency.

**Metadata**:

There is some [metadata](https://www.eea.europa.eu/data-and-maps/data/aqereporting-9) but it doesn’t follow the DCAT-AP standard and there is no download URL. So we decided to translate the information in the DCAT-AP IT standard.

#### <a name="#sup"> 4:SUP</a>

**Formats**:

Excel, CSV, PC-Axis, SDMX

There is no real download URI for any format.

**Provenance**:

[I.Stat](http://dati.istat.it), the ISTAT database.

**Metadata**:

There is some [metadata](http://dati.istat.it/OECDStat_Metadata/ShowMetadata.ashx?Dataset=DCIS_POPORESBIL1&Lang=it) next the data presented in the tool, but it follows no official standard. So we made it ourselves, gathering information from the ISTAT site and following the DCAT-AP IT standard.

#### <a name="#age"> 5:AGE</a>

**Formats**:

Excel, CSV, PC-Axis, SDMX

There is no real download URI for any format.

**Provenance**:

[I.Stat](http://dati.istat.it), the ISTAT database.

**Metadata**:

There is some [metadata](http://dati.istat.it/OECDStat_Metadata/ShowMetadata.ashx?Dataset=DCIS_POPORESBIL1&Lang=it) next the data presented in the tool, but it follows no official standard. So we made it ourselves, gathering information from the ISTAT site and following the DCAT-AP IT standard.


### <a name="#sustainability"> 4.4 Sustainability</a>

about the maintenance of the catalogue and datasets

## <a name="#website-and-data-visualization"> 5. Website and Data Visualization</a> 

In this section we present how we decided to visualize the data and metadata that compose our project, and the external resources used to do so.

Some libraries that we used throughout the whole developing of the website process:

- [Bootstrap](https://getbootstrap.com) 5, the world’s most popular front-end open source toolkit;
- [jQuery](https://jquery.com), a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, event handling, and more;
- [FontAwesome](https://fontawesome.com), Internet's icon library and toolkit;
- [pandas](https://pandas.pydata.org), a fast, powerful, flexible and easy to use open source data analysis and manipulation tool for [Python](https://www.python.org/);
- [rdflib](https://rdflib.readthedocs.io/en/stable/), a pure Python package for working with [RDF](http://www.w3.org/RDF/);
- [urllib](https://docs.python.org/3/library/urllib.html), a package that collects several modules for working with URLs.

We decided to visually represent the data we gathered in a Visualization page. There, the user can explore the datasets with an interactive map and graph.

For the Map section we used the following libraries and data:

- [Leaflet](https://leafletjs.com/SlavaUkraini/index.html), an open-source JavaScript library for mobile-friendly interactive maps, for the map interactions;
- [OpenStreetMap](https://www.openstreetmap.org/copyright), for the map data;
- [Mapbox](https://www.mapbox.com), for the map style;
- Openpolis geojson-italy repository, in particular the [geojson file](https://github.com/openpolis/geojson-italy/blob/master/geojson/limits_IT_regions.geojson) of the italian regions, based on [ISTAT data](https://www.istat.it/it/archivio/222527) (both under [CC BY 4.0 license](https://github.com/openpolis/geojson-italy/blob/master/LICENSE));
- we loosely followed [this](https://leafletjs.com/SlavaUkraini/examples/choropleth/) Leaflet tutorial.

For the Graph section we used [Chart.js](https://www.chartjs.org), a library for simple, clean and engaging HTML5 based JavaScript charts.

## <a name="#conclusion"> 6. Conclusion</a> 
final considerations about what we gathered from our dataset, catalogue, project
