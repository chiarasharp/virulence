# Virulence

## 1. Introduction
the project was made for the open access course of unibo... made by chiara manca, luca tonti....

## 2. Scenario
scenario of our project ...in 2020 covid started and blabla.

## 3. Table of Contents

1. [Introduction](#introduction)
2. [Scenario](#scenario)
3. [Table of Contents](#table-of-contents)
4. [Original Datasets and Mashup](#original-datasets-and-mashup)
  1. [Original Datasets](#original-datasets)
  2. [Mashup Dataset](#mashup-dataset)
5. [Data Analysis](#data-analysis)
  1. [Quality Analysis](#quality-analysis)
  2. [Legal Analysis](#legal-analysis)
  3. [Technical Analysis](#technical-analysis)
  4. [Sustainability](#sustainability)
6. [Website and Data Visualization](#website-and-data-visualization)
7. [Conclusion](#conclusion)

## 4. Original Datasets and Mashup

### 4.1 Original Datasets

The datasets used for our project. In the next sections we are going to analyze them from various points of view.
|ID     |FILE                                  |DESCRIPTION                                                                                                                                                                                                |DATASET                                                              |CATALOGUE                                                              |URI                                                                                                                                                                       |LICENSE                                        |LAST UPDATE      |DOWNLOADED      |
|-------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|-----------------|----------------|
|1:COVID|dpc-covid-19-ita-regioni.csv          |COVID-19 data for every italian region. We took the cases and deaths of the first pandemic wave (february to may 2020).                                                                                    |COVID-19 Monitoraggio situazione Italia (RNDT - Serie) - Versione 2.0|RNDT - Repertorio Nazionale dei Dati Territoriali - Servizio di ricerca|https://github.com/pcm-dpc/COVID-19/blob/master/dati-regioni/dpc-covid19-ita-regioni.csv                                                                                  |https://creativecommons.org/licenses/by/4.0/   |December 10, 2021|January 12, 2022|
|2:POP  |DCIS_POPORESBIL1_12012022143315331.csv|Population of every italian region in 2019.                                                                                                                                                                |Popolazione residente - bilancio                                     |I.Stat                                                                 |http://dati.istat.it/viewhtml.aspx?il=blank&vh=0000&vf=0&vcq=1100&graph=0&view-metadata=1&lang=it&QueryId=18461&metadata=DCIS_POPORESBIL1                                 |https://creativecommons.org/licenses/by/3.0/it/|October 29, 2021 |February 8, 2022|
|3:PM10 |DataExtract.csv                       |PM10 mean level of 2019 for every italian station that measure it. We calculated the mean of all the values of the stations in the same italian region and created a single value for every italian region.|Air quality annual statistics calculated by the EEA                  |Air Quality e-Reporting (AQ e-Reporting)                               |https://discomap.eea.europa.eu/App/AirQualityStatistics/index.html?Country=Italy&AirPollutant=PM10&DataAggregationProcess=Annual mean / 1 calendar year&ReportingYear=2019|https://creativecommons.org/licenses/by/4.0/   |February 18, 2022|March 10, 2022  |



### 4.2 Mashup Dataset

ID: 0:VIR

URIs: we decided to publish the data in CSV, JSON and RDF format.

Metadata:

Last update:

Description: For each italian region the dataset contains: region name, region istat code, covid-19 cases at the beginning of the pandemic, covid-19 deaths at the beginning of the pandemic, covid-19 cases at the beginning of the pandemic for every 100.000 people, covid-19 deaths at the beginning of the pandemic for every 100.000 people, pm10 level mean of 2019, ...

Methodology: We manipulated and merged the data coming from the previously described datasets and followed the [italian guidelines for the enhancement of public information assets](https://docs.italia.it/italia/daf/lg-patrimonio-pubblico/it/bozza/index.html), pairing our merged data with the appropriate metadata about both the original and mashup datasets.

## 5. Data Analysis

### 5.1 Quality Analysis

linee guida valorizzazione patrimonio informativo pubblico

accuracy, coherence, completeness, currentness

### 5.2 Legal Analysis

privacy, license

### 5.3 Technical Analysis

formats, metadata, uris, provenance

### 5.4 Sustainability

about the maintenance of the catalogue and datasets

## 6. Website and Data Visualization

In this section we present how we decided to visualize the data and metadata that compose our project, and the external resources used to do so.

Some libraries that we used throughout the whole developing of the website process:

- [Bootstrap](https://getbootstrap.com) 5, the world’s most popular front-end open source toolkit;
- [jQuery](https://jquery.com), a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, event handling, and more;
- [FontAwesome](https://fontawesome.com), Internet's icon library and toolkit;
- [pandas](https://pandas.pydata.org), a fast, powerful, flexible and easy to use open source data analysis and manipulation tool for [Python](https://www.python.org/).

We decided to visually represent the data we gathered in a Visualization ****page. There, the user can explore the datasets with an interactive map and graph.

For the Map section we used the following libraries and data:

- [Leaflet](https://leafletjs.com/SlavaUkraini/index.html), an open-source JavaScript library for mobile-friendly interactive maps, for the map interactions;
- [OpenStreetMap](https://www.openstreetmap.org/copyright), for the map data;
- [Mapbox](https://www.mapbox.com), for the map style;
- Openpolis geojson-italy repository, in particular the [geojson file](https://github.com/openpolis/geojson-italy/blob/master/geojson/limits_IT_regions.geojson) of the italian regions, based on [ISTAT data](https://www.istat.it/it/archivio/222527) (both under [CC BY 4.0 license](https://github.com/openpolis/geojson-italy/blob/master/LICENSE));
- we loosely followed [this](https://leafletjs.com/SlavaUkraini/examples/choropleth/) Leaflet tutorial.

For the Graph section we used [Chart.js](https://www.chartjs.org), a library for simple, clean and engaging HTML5 based JavaScript charts.

## 7. Conclusion
final considerations about what we gathered from our dataset, catalogue, project
