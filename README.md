# ApiRestCountries

Este proyecto fue generado con  [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.
Es el segundo acercamiento al ag-grid desde un servcio rest externo

## Pasos
--------------------------------------
1- Crear el proyecto angular 
--------------------------------------
C:\ ng new agGrid

Would you like to Add Angular routing?  Yes

Which stylesheet format would you like to use? CSS

--------------------------------------
2-Instalar ag-grid
--------------------------------------
C:\agGrid:>npm install --save ag-grid-community ag-grid-angular

--------------------------------------
3-Instalar bootstrap
--------------------------------------
npm install bootstrap jquery @popperjs/core

--------------------------------------
3.1-Agregar styles bootstrap  y ag-grid .(angular.json)
--------------------------------------

 "styles": [
 
              "./node_modules/ag-grid-community/dist/styles/ag-grid.css",
              "./node_modules/ag-grid-community/dist/styles/ag-theme-alpine-dark.css",
              "./node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/@popperjs/core/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
--------------------------------------
3.2-Cambiar Idioma  .(assets -> crear locale.es.js y adicionar este contenido)
--------------------------------------

export const localeEs = {
    selectAll: 'Seleccionar todo',
    selectAllSearchResults: 'Seleccionar todos los resultados de búsqueda',
    searchOoo: 'Buscar...',
    blanks: 'Vacíos',
    noMatches: 'Sin coincidencias',

    filterOoo: 'Filtro...',
    equals: 'Igual',
    notEqual: 'Diferente',

    // Number Filter
    lessThan: 'Menor que',
    greaterThan: 'Mayor que',
    lessThanOrEqual: 'Menor o igual que',
    greaterThanOrEqual: 'Mayor o igual que',
    inRange: 'En el rango',
    inRangeStart: 'Desde',
    inRangeEnd: 'Hasta',

    // Text Filter
    contains: 'Contiene',
    notContains: 'No contiene',
    startsWith: 'Empieza con',
    endsWith: 'Termina con',

    // Date Filter
    dateFormatOoo: 'dd-mm-Yyyy',

    // Filter Conditions
    andCondition: 'Y',
    orCondition: 'O',

    // Filter Buttons
    applyFilter: 'Aplicar',
    resetFilter: 'Reiniciar',
    clearFilter: 'Borrar',
    cancelFilter: 'Cancelar',

    // Side Bar
    columns: 'Columnas',
    filters: 'Filtros',

    // columns tool panel
    pivotMode: 'Modo Pivote',
    groups: 'Grupos de columnas',
    rowGroupColumnsEmptyMessage: 'Soltar aquí para crear un grupo de columnas',
    values: 'Valores',
    valueColumnsEmptyMessage: 'Soltar aquí para agregar',
    pivots: 'Column Labels',
    pivotColumnsEmptyMessage: 'Soltar aquí para indicar etiquetas de columna',

    // Header of the Default Group Column
    group: 'Grupo',

    // Other
    loadingOoo: 'Cargando...',
    noRowsToShow: 'No hay filas para mostrar',
    enabled: 'Activado',

    // Menu
    pinColumn: 'Fijar Columna',
    pinLeft: 'Fijar a Izquierda',
    pinRight: 'Fijar a Derecha',
    noPin: 'Soltar',
    valueAggregation: 'Agregación por valor',
    autosizeThiscolumn: 'Tamaño automático para esta Columna',
    autosizeAllColumns: 'Tamaño automático para todas las Columnas',
    groupBy: 'Agrupar por',
    ungroupBy: 'Desagrupar por',
    resetColumns: 'Reiniciar Columnas',
    expandAll: 'Expandir Todo',
    collapseAll: 'Cerrar Todo',
    copy: 'Copiar',
    ctrlC: 'Ctrl+C',
    copyWithHeaders: 'Copiar con Cabeceras',
    paste: 'Pegar',
    ctrlV: 'Ctrl+V',
    export: 'Exportar',
    csvExport: 'Exportar a CSV',
    excelExport: 'Exportar a Excel (.xlsx)',
    excelXmlExport: 'Exportar a Excel antiguo (.xml)',

    // Enterprise Menu Aggregation and Status Bar
    sum: 'Sum',
    min: 'Min',
    max: 'Max',
    none: 'Nada',
    count: 'Cuenta',
    avg: 'Media',
    filteredRows: 'Filtrado',
    selectedRows: 'Seleccionado',
    totalRows: 'Total Filas',
    totalAndFilteredRows: 'Filas',
    page: 'Página',
    more: 'Más',
    to: 'A',
    of: 'De',
    next: 'Siguiente',
    last: 'Último',
    first: 'Primero',
    previous: 'Anterior',

    // Enterprise Menu (Charts)
    pivotChartAndPivotMode: 'Gráfico de Pivote y Modo Pivote',
    pivotChart: 'Gráfico de Pivote',
    chartRange: 'Gráfico de Intervalo',

    columnChart: 'Columna',
    groupedColumn: 'Agrupado',
    stackedColumn: 'Apilado',
    normalizedColumn: '100% Apilado',

    barChart: 'Barra',
    groupedBar: 'Agrupado',
    stackedBar: 'Apilado',
    normalizedBar: '100% Apilado',

    pieChart: 'Tarta',
    pie: 'Tarta',
    doughnut: 'Donut',

    line: 'Línea',

    xyChart: 'X Y (Dispersión)',
    scatter: 'Dispersión',
    bubble: 'Burbuja',

    areaChart: 'Area',
    area: 'Area',
    stackedArea: 'Apilado',
    normalizedArea: '100% Apilado',

    histogramChart: 'Histograma',

    // Charts
    pivotChartTitle: 'Gráfico de Pivote',
    rangeChartTitle: 'Gráfico de Intervalo',
    settings: 'Configuración',
    data: 'Datos',
    format: 'Formato',
    categories: 'Categorías',
    defaultCategory: '(Ninguna)',
    series: 'Series',
    xyValues: 'Valores X Y',
    paired: 'Mode pareado',
    axis: 'Eje',
    navigator: 'Navegador',
    color: 'Color',
    thickness: 'Grosor',
    xType: 'Tipo X',
    automatic: 'Automático',
    category: 'Categoría',
    number: 'Número',
    time: 'Tiempo',
    xRotation: 'Rotación X',
    yRotation: 'Rotación Y',
    ticks: 'Ticks',
    width: 'Ancho',
    height: 'Alto',
    length: 'Longi
