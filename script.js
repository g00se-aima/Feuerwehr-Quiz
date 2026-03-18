// Personnel roster - real fire department staff
let personnel = [
  { name: 'Schumann, Lars', qualifications: ['Gruppenführer', 'Notfallsanitäter', 'Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '17.10.1976', phoneHandy: '', phoneFestnetz: '02371/9414313', phoneDienst: '', strasse: 'Gertrudisstr.', hausnummer: '14', stadt: 'Iserlohn', postleitzahl: '58640', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Schilling Rösner, Carsten', qualifications: ['Tagesdienst Verwaltung'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '31.12.1968', phoneHandy: '0177/8311268', phoneFestnetz: '', phoneDienst: '', strasse: 'Osthausstraße', hausnummer: '14', stadt: 'Wetter', postleitzahl: '58300', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Göpfert, Tobias', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '21.04.1988', phoneHandy: '0176/59054042', phoneFestnetz: '', phoneDienst: '', strasse: 'Zur Laube', hausnummer: '12', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Neuhaus, Dirk', qualifications: ['Gruppenführer', 'Wachabteilungsleiter', 'Maschinist', 'Tagesdienst Verwaltung'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '11.08.1973', phoneHandy: '', phoneFestnetz: '02338/4889814', phoneDienst: '', strasse: 'Anton – Meier- Str.', hausnummer: '2', stadt: 'Breckerfeld', postleitzahl: '58339', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Höpfner, Connor', qualifications: ['Praktikant'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '13.09.2005', phoneHandy: '0176/52325120', phoneFestnetz: '', phoneDienst: '', strasse: 'Kolpingstraße', hausnummer: '1', stadt: 'Schwelm', postleitzahl: '58332', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Breker, Florian', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '02.05.1990', phoneHandy: '0172/5278544', phoneFestnetz: '', phoneDienst: '', strasse: 'Wilhelmshöher Str.', hausnummer: '54', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Franz, Katharina', qualifications: ['Tagesdienst Verwaltung'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '18.10.1995', phoneHandy: '', phoneFestnetz: '0157/89370657', phoneDienst: '', strasse: 'Egelseestr.', hausnummer: '41', stadt: 'Bad Saulgau', postleitzahl: '88348', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Schacht, Frank', qualifications: ['Leiter der Feuerwehr'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '12.06.1966', phoneHandy: '', phoneFestnetz: '0170/8083985', phoneDienst: '', strasse: 'Im Vogelsang', hausnummer: '34', stadt: 'Hattingen', postleitzahl: '45527', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Wenschuch, Noah', qualifications: ['Praktikant'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '10.10.2000', phoneHandy: '0151/0540242', phoneFestnetz: '', phoneDienst: '', strasse: 'Holzstraße', hausnummer: '147', stadt: 'Bochum', postleitzahl: '44869', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Baltzer, Sean-Philip', qualifications: ['Notfallsanitäter', 'Maschinist', 'Praxisanleiter'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '24.05.1991', phoneHandy: '', phoneFestnetz: '0151/42471950', phoneDienst: '', strasse: 'Hoffnungstalerstr.', hausnummer: '18', stadt: 'Hagen', postleitzahl: '58091', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Heil Gimbel, Markus', qualifications: ['Praxisanleiter', 'Tagesdienst Verwaltung'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '12.08.1979', phoneHandy: '0171/7881552', phoneFestnetz: '0202 / 5287788', phoneDienst: '', strasse: 'Zum Sportplatz', hausnummer: '11', stadt: 'Sprockhövel', postleitzahl: '45549', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Gerecht, Oliver', qualifications: ['Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '16.02.1971', phoneHandy: '0176/45005164', phoneFestnetz: '02333/8697398', phoneDienst: '', strasse: 'Gutjahrstraße', hausnummer: '10', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Hartmann-Paulsen, Jana', qualifications: ['Tagesdienst Verwaltung'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '04.06.1994', phoneHandy: '0151 445 701 08', phoneFestnetz: '', phoneDienst: '', strasse: 'Krüner Str.', hausnummer: '70', stadt: 'Witten', postleitzahl: '58456', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Schätzl, Manuel', qualifications: ['Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '07.04.1984', phoneHandy: '0176/64193975', phoneFestnetz: '', phoneDienst: '', strasse: 'August-Bendler-Straße', hausnummer: '7a', stadt: 'Schwelm', postleitzahl: '58332', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Hollein, Christopher', qualifications: ['Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '21.12.1993', phoneHandy: '0157/34444746', phoneFestnetz: '02373/3935275', phoneDienst: '', strasse: 'Beethovenstraße', hausnummer: '1', stadt: 'Menden', postleitzahl: '58706', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Bierhoff, Robin', qualifications: ['Gruppenführer', 'Notfallsanitäter', 'Maschinist', 'Wachabteilungsleiter'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '13.04.1986', phoneHandy: '0159/01965540', phoneFestnetz: '', phoneDienst: '', strasse: 'Hackertsbergweg', hausnummer: '6', stadt: 'Witten', postleitzahl: '58454', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Radermacher, Reinhard', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '18.10.1985', phoneHandy: '0176/64188699', phoneFestnetz: '', phoneDienst: '', strasse: 'Filde', hausnummer: '7', stadt: 'Radevormwald', postleitzahl: '42477', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Saßmannshausen, Kay', qualifications: ['Gruppenführer', 'Notfallsanitäter', 'Wachabteilungsleiter'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '20.04.1974', phoneHandy: '0163/6355766', phoneFestnetz: '02352/2678733', phoneDienst: '', strasse: 'Auf dem Haeken', hausnummer: '1a', stadt: 'Nachrodt-Wiblingwerde', postleitzahl: '58769', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Gerke, Sebastian', qualifications: ['Gruppenführer', 'Notfallsanitäter', 'Maschinist', 'Wachabteilungsleiter'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '24.06.1987', phoneHandy: '0172/2079890', phoneFestnetz: '', phoneDienst: '', strasse: 'Jahnstr.', hausnummer: '26a', stadt: 'Radevormwald', postleitzahl: '42477', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Kretzer, Daniel', qualifications: ['Gruppenführer', 'Notfallsanitäter', 'Maschinist', 'Wachabteilungsleiter'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '22.08.1988', phoneHandy: '0151/23554582', phoneFestnetz: '0202/74780130', phoneDienst: '', strasse: 'Am Werloh', hausnummer: '67', stadt: 'Wuppertal', postleitzahl: '42389', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Borg, Patrick', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '24.09.1994', phoneHandy: '0176/23144420', phoneFestnetz: '', phoneDienst: '', strasse: 'Vereinsstr.', hausnummer: '10', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Woldt, Dominik', qualifications: ['Gruppenführer', 'Wachabteilungsleiter', 'Notfallsanitäter', 'Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '18.03.1981', phoneHandy: '0176/84757370', phoneFestnetz: '', phoneDienst: '', strasse: 'Nielandweg', hausnummer: '13', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Schnitzlohne, Hagen', qualifications: ['Praktikant'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '29.01.2003', phoneHandy: '0176/68015272', phoneFestnetz: '', phoneDienst: '', strasse: 'Grüntal', hausnummer: '2', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Koch, Jan', qualifications: ['Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '07.04.1999', phoneHandy: '0157/79022833', phoneFestnetz: '', phoneDienst: '', strasse: 'Frackmannsfeld', hausnummer: '62', stadt: 'Witten', postleitzahl: '58455', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Dörner, Jörg', qualifications: ['Tagesdienst Verwaltung'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '28.03.1967', phoneHandy: '', phoneFestnetz: '02333/88824', phoneDienst: '', strasse: 'Neuenlanderstraße', hausnummer: '65', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Kielmann, Gabriel', qualifications: ['Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '16.03.1990', phoneHandy: '0152/36517566', phoneFestnetz: '', phoneDienst: '', strasse: 'Athener Weg', hausnummer: '7', stadt: 'Dortmund', postleitzahl: '44269', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Kruse, Maximilian Günter', qualifications: ['Praktikant'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '04.10.1991', phoneHandy: '0176/21400456', phoneFestnetz: '', phoneDienst: '', strasse: 'Tobienstraße', hausnummer: '10', stadt: 'Schwelm', postleitzahl: '58332', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Asbeck, Jens', qualifications: ['Gruppenführer', 'Maschinist', 'Wachabteilungsleiter'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '29.01.1974', phoneHandy: '0170/2111388', phoneFestnetz: '02333/80049', phoneDienst: '', strasse: 'Leibnizstraße', hausnummer: '42', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Lippmann, Sascha', qualifications: ['Gruppenführer', 'Notfallsanitäter', 'Maschinist', 'Wachabteilungsleiter'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '12.02.1975', phoneHandy: '0160/8531059', phoneFestnetz: '02333/89583', phoneDienst: '', strasse: 'Saarlandring', hausnummer: '32', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Rohleder, Philipp', qualifications: ['Gruppenführer', 'Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '27.01.1992', phoneHandy: '0151/61103901', phoneFestnetz: '', phoneDienst: '', strasse: 'Große Weide', hausnummer: '22', stadt: 'Schwelm', postleitzahl: '58332', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Mones, Malte', qualifications: ['Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '17.03.1992', phoneHandy: '0172/4674366', phoneFestnetz: '', phoneDienst: '', strasse: 'Wulfhorststraße', hausnummer: '31a', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Windhövel, Björn', qualifications: ['Zugführer', 'Gruppenführer', 'Wachabteilungsleiter', 'Maschinist', 'Tagesdienst Verwaltung'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '06.11.1980', phoneHandy: '0172/4463539', phoneFestnetz: '', phoneDienst: '', strasse: 'Behlinger Weg', hausnummer: '66', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Welker, Markus', qualifications: ['Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '09.06.1966', phoneHandy: '', phoneFestnetz: '0202/6480119', phoneDienst: '', strasse: 'Wittener Straße', hausnummer: '80 a', stadt: 'Wuppertal', postleitzahl: '42279', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Blumenroth, Thomas', qualifications: ['Notfallsanitäter'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '02.02.1982', phoneHandy: '0172/2719432', phoneFestnetz: '', phoneDienst: '', strasse: 'Kückelhauserstr.', hausnummer: '7', stadt: 'Breckerfeld', postleitzahl: '58339', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Szczygiel, Lukas', qualifications: ['Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '29.04.1981', phoneHandy: '0152/33929839', phoneFestnetz: '', phoneDienst: '', strasse: 'Loh', hausnummer: '37a', stadt: 'Breckerfeld', postleitzahl: '58339', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Quabeck, Nele', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '28.10.1994', phoneHandy: '0157/79646550', phoneFestnetz: '02333/8612145', phoneDienst: '', strasse: 'Röthelteich', hausnummer: '34', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Hercher, Oliver', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '27.11.1975', phoneHandy: '0175/5658118', phoneFestnetz: '', phoneDienst: '', strasse: 'Korzert', hausnummer: '10', stadt: 'Wuppertal', postleitzahl: '42349', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Gille, Marcel', qualifications: ['Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '23.10.1987', phoneHandy: '0173/3415118', phoneFestnetz: '', phoneDienst: '', strasse: 'Präsidentenstraße', hausnummer: '32', stadt: 'Schwelm', postleitzahl: '58332', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Stottrop, Stefan', qualifications: ['Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '03.01.1999', phoneHandy: '0157/50401594', phoneFestnetz: '', phoneDienst: '', strasse: 'Hasenkampstraße', hausnummer: '12', stadt: 'Bochum', postleitzahl: '44795', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Kleinert, Sarah', qualifications: ['Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '08.03.1995', phoneHandy: '0176/34697443', phoneFestnetz: '', phoneDienst: '', strasse: 'Rosendelle', hausnummer: '5', stadt: 'Bochum', postleitzahl: '44869', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Brendel, Yannick', qualifications: ['Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '04.01.1989', phoneHandy: '0157/38839832', phoneFestnetz: '', phoneDienst: '', strasse: 'Oeger Straße', hausnummer: '45', stadt: 'Iserlohn', postleitzahl: '58642', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Gröteke, Nils', qualifications: ['Notfallsanitäter', 'Maschinist', 'Praxisanleiter'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '27.06.1989', phoneHandy: '0177/6306432', phoneFestnetz: '', phoneDienst: '', strasse: 'Heinrichstr.', hausnummer: '2 A', stadt: 'Hattingen', postleitzahl: '45527', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Denz, Christian', qualifications: ['Notfallsanitäter', 'Maschinist', 'Praxisanleiter'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '11.02.1985', phoneHandy: '0151/11028500', phoneFestnetz: '', phoneDienst: '', strasse: 'Holberg', hausnummer: '110', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'van Lengen, Tobi', qualifications: ['Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '31.10.1991', phoneHandy: '', phoneFestnetz: '02302/1697469', phoneDienst: '', strasse: 'Am Masling', hausnummer: '9', stadt: 'Witten', postleitzahl: '58456', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Weigel, Stefanie', qualifications: ['Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '15.11.1990', phoneHandy: '0157/56628959', phoneFestnetz: '', phoneDienst: '', strasse: 'Westhellweg', hausnummer: '21B', stadt: 'Schwerte', postleitzahl: '58239', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Spelsberg-Salzmann, Tim', qualifications: ['Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '08.01.2000', phoneHandy: '0157/38386249', phoneFestnetz: '', phoneDienst: '', strasse: 'Singerhof', hausnummer: '67', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Zimmermann, Lars', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '15.10.1990', phoneHandy: '0157/36271188', phoneFestnetz: '', phoneDienst: '', strasse: 'Weidenstraße', hausnummer: '1', stadt: 'Schalksmühle', postleitzahl: '58579', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Menzlin, Kai', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '25.05.1987', phoneHandy: '0174/8527476', phoneFestnetz: '', phoneDienst: '', strasse: 'Schulstraße', hausnummer: '14', stadt: 'Remscheid', postleitzahl: '42899', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Scherer, Andreas', qualifications: ['Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '06.11.1966', phoneHandy: '0176/70461329', phoneFestnetz: '02303/490216', phoneDienst: '', strasse: 'Dreishofstr.', hausnummer: '56', stadt: 'Unna', postleitzahl: '59425', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Makulski, Dominik', qualifications: ['Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '02.11.1996', phoneHandy: '0171/7623752', phoneFestnetz: '', phoneDienst: '', strasse: 'Wernburgastr', hausnummer: '19', stadt: 'Bochum', postleitzahl: '44892', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Reichert, Patrick', qualifications: ['Angestellte/er'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '29.04.1987', phoneHandy: '0163/3780102', phoneFestnetz: '', phoneDienst: '', strasse: 'Haferkamp', hausnummer: '48', stadt: 'Hagen', postleitzahl: '58093', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Passilaitis, Pierre', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '27.07.1994', phoneHandy: '0173/5107146', phoneFestnetz: '', phoneDienst: '', strasse: 'Ewald-Oberhaus-Straße', hausnummer: '9', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Schaberg, Torben', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '03.08.1998', phoneHandy: '0173/3482815', phoneFestnetz: '', phoneDienst: '', strasse: 'Heilkenstr.', hausnummer: '25', stadt: 'Wetter', postleitzahl: '58300', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Peveling, Dennis', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '10.08.1988', phoneHandy: '0176/64964864', phoneFestnetz: '', phoneDienst: '', strasse: 'Auf der Ürfte', hausnummer: '2', stadt: 'Hattingen', postleitzahl: '45527', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Scheuren, Lucca', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '18.09.1998', phoneHandy: '0152/02619612', phoneFestnetz: '', phoneDienst: '', strasse: 'Gaußstr.', hausnummer: '8', stadt: 'Bochum', postleitzahl: '44879', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Bentz, Jan-David', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '29.06.1992', phoneHandy: '0163/8032068', phoneFestnetz: '', phoneDienst: '', strasse: 'Schulstraße', hausnummer: '12a', stadt: 'Wülfrath', postleitzahl: '42489', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Mütze, Julia', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '31.03.1981', phoneHandy: '0157/70887925', phoneFestnetz: '', phoneDienst: '', strasse: 'Ronsdorfer Straße', hausnummer: '177', stadt: 'Remscheid', postleitzahl: '42855', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Kramer, Emily', qualifications: ['Praktikant'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '22.07.2004', phoneHandy: '0173/74165562', phoneFestnetz: '', phoneDienst: '', strasse: 'Rüggeberger Str.', hausnummer: '223', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Senftler, Christian', qualifications: ['Gruppenführer', 'Notfallsanitäter', 'Wachabteilungsleiter', 'Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '22.12.1981', phoneHandy: '0170/1830513', phoneFestnetz: '02355/505418', phoneDienst: '', strasse: 'Am Mathagen', hausnummer: '18', stadt: 'Schalksmühle', postleitzahl: '58579', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Michalsky, Isabel Jessica', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '08.11.1995', phoneHandy: '0157/37004667', phoneFestnetz: '', phoneDienst: '', strasse: 'Hanbrucherstraße', hausnummer: '25', stadt: 'Aachen', postleitzahl: '52064', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Jeske, Lars', qualifications: ['Praktikant'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '30.04.1998', phoneHandy: '0157/89258700', phoneFestnetz: '', phoneDienst: '', strasse: 'Casinostraße', hausnummer: '4', stadt: 'Witten', postleitzahl: '58452', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Günther, Lucian', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '20.06.1992', phoneHandy: '0157/78255586', phoneFestnetz: '', phoneDienst: '', strasse: 'Wuppertaler Straße', hausnummer: '126', stadt: 'Sprockhövel', postleitzahl: '45549', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Kämmer, Jens', qualifications: ['Zugführer', 'Gruppenführer', 'Wachabteilungsleiter', 'Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '25.05.1977', phoneHandy: '0170/5279046', phoneFestnetz: '02267/8725269', phoneDienst: '', strasse: 'Hammer', hausnummer: '14a', stadt: 'Wipperfürth', postleitzahl: '51688', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Zenkner, Marcel', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '26.10.1990', phoneHandy: '0162/6487572', phoneFestnetz: '', phoneDienst: '', strasse: 'Willringhauser Straße', hausnummer: '8', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Wiese, Sebastian', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '26.01.1994', phoneHandy: '0157/35176892', phoneFestnetz: '', phoneDienst: '', strasse: 'Südstraße', hausnummer: '49', stadt: 'Gevelsberg', postleitzahl: '58285', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Schnettler, Richard', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '11.05.1995', phoneHandy: '0157/86471828', phoneFestnetz: '', phoneDienst: '', strasse: 'Ruhreckerstraße', hausnummer: '31', stadt: 'Hagen', postleitzahl: '58099', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Beckers, Jan', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '25.02.1997', phoneHandy: '0151/58771163', phoneFestnetz: '', phoneDienst: '', strasse: 'Weststraße', hausnummer: '11', stadt: 'Wetter', postleitzahl: '58300', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Weigner, Paul', qualifications: ['Praktikant'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '16.08.2003', phoneHandy: '0152/02754814', phoneFestnetz: '', phoneDienst: '', strasse: 'Am Zamelberg', hausnummer: '49', stadt: 'Wetter', postleitzahl: '58300', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Engel, Patrick', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA3', defaultStatus: 'Verfüger', geburtsdatum: '20.02.1993', phoneHandy: '0151/41812472', phoneFestnetz: '', phoneDienst: '', strasse: 'Orthöver Weg', hausnummer: '102', stadt: 'Dorsten', postleitzahl: '46286', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Agethen, Dominik', qualifications: ['Praktikant'], shift: 'WA1', defaultStatus: 'Verfüger', geburtsdatum: '05.12.1995', phoneHandy: '0175/2849266', phoneFestnetz: '', phoneDienst: '', strasse: 'Nachtigallstraße', hausnummer: '19', stadt: 'Wetter', postleitzahl: '58300', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Göbel, Patrick', qualifications: ['Notfallsanitäter', 'Maschinist'], shift: 'WA2', defaultStatus: 'Verfüger', geburtsdatum: '23.09.1993', phoneHandy: '0173/5703307', phoneFestnetz: '', phoneDienst: '', strasse: 'Lilienthalstraße', hausnummer: '4', stadt: 'Herdecke', postleitzahl: '58313', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Girke, Nadine', qualifications: ['Tagesdienst Verwaltung'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '23.04.1986', phoneHandy: '0172/5327594', phoneFestnetz: '', phoneDienst: '', strasse: 'Vilvoorder Str.', hausnummer: '14', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Paßmann, Tobias', qualifications: ['Tagesdienst Verwaltung'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '29.09.1989', phoneHandy: '0177/1989153', phoneFestnetz: '02333/6198000', phoneDienst: '', strasse: 'Heilenbecker Straße', hausnummer: '152', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Sieberg, Sibylle', qualifications: ['Tagesdienst Verwaltung'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '06.07.1966', phoneHandy: '0171/1167246', phoneFestnetz: '02333/5668', phoneDienst: '', strasse: 'Herkenegge', hausnummer: '4 b', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Faure, Saskia', qualifications: ['Tagesdienst Verwaltung'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '20.02.1986', phoneHandy: '01578/2219332', phoneFestnetz: '', phoneDienst: '', strasse: 'Heimstr.', hausnummer: '3', stadt: 'Ennepetal', postleitzahl: '58256', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Dobrinski, Ilona', qualifications: ['Angestellte/er'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '04.11.1965', phoneHandy: '0177/4551067', phoneFestnetz: '', phoneDienst: '', strasse: '', hausnummer: '', stadt: '', postleitzahl: '', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] },
  { name: 'Heitzer, Birgit', qualifications: ['Angestellte/er'], shift: 'Tagesdienst', defaultStatus: 'Verfüger', geburtsdatum: '13.10.1961', phoneHandy: '01577/1432068', phoneFestnetz: '02333/792655', phoneDienst: '', strasse: '', hausnummer: '', stadt: '', postleitzahl: '', waeschenummer: '', dailyStatus: {}, timeOffDates: [], shiftHistory: [] }
];

// State
let currentSort = 'name';
let currentView = 'table';
let currentWeekStart = new Date();
currentWeekStart.setDate(currentWeekStart.getDate() - currentWeekStart.getDay() + 1);
let editingIndex = null; // Track if we're editing an existing person
let currentDatePickerField = null;
let datePickerDate = new Date();
let datePickerYear = new Date().getFullYear();
let datePickerMonth = new Date().getMonth();
let calendarViewMode = 'week'; // week, month, or year
let calendarViewDate = new Date(); // Current date for calendar navigation

// Helper function to consistently create date keys in YYYY-MM-DD format (local timezone)
function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Shift hours configuration
const shiftHours = {
  'WA1': 24,
  'WA2': 24,
  'WA3': 24,
  'Tagesdienst': 9.6
};

// NRW (North Rhine-Westphalia) Public Holidays 2026 and beyond
const nrwPublicHolidays = [
  // 2026
  { date: '2026-01-01', name: 'Neujahr' },
  { date: '2026-02-16', name: 'Rosenmontag' },
  { date: '2026-02-17', name: 'Fastnacht' },
  { date: '2026-04-10', name: 'Karfreitag' },
  { date: '2026-04-12', name: 'Ostermontag' },
  { date: '2026-04-30', name: 'Tag der Arbeit' },
  { date: '2026-05-21', name: 'Christi Himmelfahrt' },
  { date: '2026-05-31', name: 'Pfingstmontag' },
  { date: '2026-06-11', name: 'Fronleichnam' },
  { date: '2026-08-15', name: 'Mariä Himmelfahrt' },
  { date: '2026-10-03', name: 'Tag der Deutschen Einheit' },
  { date: '2026-11-01', name: 'Allerheiligen' },
  { date: '2026-11-18', name: 'Buß- und Bettag' },
  { date: '2026-12-25', name: '1. Weihnachtstag' },
  { date: '2026-12-26', name: '2. Weihnachtstag' },
  // 2027
  { date: '2027-01-01', name: 'Neujahr' },
  { date: '2027-03-01', name: 'Rosenmontag' },
  { date: '2027-03-02', name: 'Fastnacht' },
  { date: '2027-03-26', name: 'Karfreitag' },
  { date: '2027-03-28', name: 'Ostermontag' },
  { date: '2027-04-30', name: 'Tag der Arbeit' },
  { date: '2027-05-06', name: 'Christi Himmelfahrt' },
  { date: '2027-05-16', name: 'Pfingstmontag' },
  { date: '2027-05-27', name: 'Fronleichnam' },
  { date: '2027-08-15', name: 'Mariä Himmelfahrt' },
  { date: '2027-10-03', name: 'Tag der Deutschen Einheit' },
  { date: '2027-11-01', name: 'Allerheiligen' },
  { date: '2027-11-17', name: 'Buß- und Bettag' },
  { date: '2027-12-25', name: '1. Weihnachtstag' },
  { date: '2027-12-26', name: '2. Weihnachtstag' },
];

// Check if a date is a public holiday
function isPublicHoliday(dateKey) {
  return nrwPublicHolidays.some(holiday => holiday.date === dateKey);
}

// Get holiday name if date is a public holiday
function getHolidayName(dateKey) {
  const holiday = nrwPublicHolidays.find(h => h.date === dateKey);
  return holiday ? holiday.name : null;
}

// Helper: Get rotation group working on a specific date
// Groups rotate: Group 0 (days 0-2), Group 1 (days 3-5), Group 2 (days 6-8), then repeat
function getRotationGroupForDate(date) {
  const referenceDate = new Date(2026, 0, 1); // Local timezone
  const daysDiff = Math.floor((date - referenceDate) / (1000 * 60 * 60 * 24));
  return Math.floor(daysDiff / 3) % 3;
}

// Get personnel in a specific rotation group
function getRotationGroup(groupIndex) {
  const groupSize = 14;
  return personnel.slice(groupIndex * groupSize, (groupIndex + 1) * groupSize);
}

// Map rotation groups to WA shifts (group 0 -> WA1, group 1 -> WA2, group 2 -> WA3)
function getShiftForRotationGroup(groupIndex) {
  const shifts = ['WA1', 'WA2', 'WA3'];
  return shifts[groupIndex % 3];
}

// Get the shift that's active on a specific date (original function - still needed for some calculations)
function getShiftStatus(date) {
  const refDate = new Date(2026, 0, 1); // January 1, 2026 in local timezone
  const daysDiff = date - refDate;
  let days = Math.floor(daysDiff / (1000 * 60 * 60 * 24));
  
  // Handle dates before reference date (negative modulo)
  let cycleDay = ((days % 3) + 3) % 3;
  const shifts = ['WA3', 'WA1', 'WA2']; // Day 0 (01.01.2026) = WA3
  return { cycleDay, shift: shifts[cycleDay], shifts };
}

// Get personnel working on a specific shift on a given date
// Returns array of personnel objects who are assigned to that shift on that date
function getPersonnelForShiftOnDate(shiftName, date) {
  const dateKey = getDateKey(date);
  const dayOfWeek = date.getDay(); // 0=Sunday, 6=Saturday
  
  // Tagesdienst: Only works Monday-Friday, no weekends or public holidays
  if (shiftName === 'Tagesdienst') {
    // Check if weekend or public holiday
    if (dayOfWeek === 0 || dayOfWeek === 6 || isPublicHoliday(dateKey)) {
      return [];
    }
    // Return all personnel assigned to Tagesdienst
    return personnel.filter(person => person.shift === 'Tagesdienst');
  }
  
  // For WA shifts (24-hour rotations): Only people actually assigned to this WA
  // Filter first by their assigned shift
  const waPersonnel = personnel.filter(person => person.shift === shiftName);
  
  // Then check if this WA is active on this date
  const refDate = new Date(2026, 0, 1); // January 1, 2026 in local timezone
  const daysDiff = Math.floor((date - refDate) / (1000 * 60 * 60 * 24));
  
  // Use 3-day cycle to determine which shift is active
  let cycleDay = ((daysDiff % 3) + 3) % 3;
  const shifts = ['WA3', 'WA1', 'WA2']; // Day 0 (01.01.2026) = WA3
  const activeShift = shifts[cycleDay];
  
  // Only return people if this WA is the active shift on this date
  if (activeShift !== shiftName) {
    return [];
  }
  
  // All people assigned to this WA work when it's their shift day
  return waPersonnel;
}

// Get the current effective shift for a person based on rotation cycles
// This allows personnel to rotate through different shifts over time
function getPersonCurrentShift(personIndex, date) {
  // Get the rotation cycle (0, 1, or 2)
  const rotationGroupForDate = getRotationGroupForDate(date);
  
  // Get person's base rotation position (which group they're in out of 3)
  const personBaseGroup = Math.floor(personIndex / 11);
  
  // Calculate rotations: how many complete 9-day cycles have occurred
  const refDate = new Date(2026, 0, 1); // Local timezone
  const daysDiff = Math.floor((date - refDate) / (1000 * 60 * 60 * 24));
  const completeCycles = Math.floor(daysDiff / 9);
  
  // Current effective group for this person (rotates every 9 days)
  const effectiveGroup = (personBaseGroup + completeCycles) % 3;
  
  // Return which shift this person works on this date
  const shifts = ['WA1', 'WA2', 'WA3'];
  return shifts[effectiveGroup];
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadPersonnelData();
  initializeEventListeners();
  renderTable();
  displayStaffingWarnings();
  renderCalendar();
  renderOverview();
  renderPersonnelList();
  renderTimeOffView(2026);
});

// Event listeners
function initializeEventListeners() {
  // View toggle buttons
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      switchView(e.target.dataset.view);
    });
  });

  // Sort select
  document.getElementById('sort-select').addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderTable();
    renderPersonnelList();
  });

  // Export data button
  document.getElementById('save-btn').addEventListener('click', () => {
    const dataToExport = {
      personnel: personnel,
      exportDate: new Date().toISOString(),
      version: '1.0'
    };
    
    const jsonString = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dienstplan-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert('✓ Daten exportiert!');
  });

  // Import data button
  document.getElementById('load-btn').addEventListener('click', () => {
    document.getElementById('load-file-input').click();
  });

  // Handle file import
  document.getElementById('load-file-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.personnel && Array.isArray(data.personnel)) {
          personnel = data.personnel;
          savePersonnelData();
          
          // Refresh all views
          renderPersonnelList();
          renderTable();
          displayStaffingWarnings();
          renderCalendar();
          renderOverview();
          renderTimeOffView(2026);
          
          alert('✓ Daten importiert! (' + personnel.length + ' Personen geladen)');
        } else {
          alert('✗ Fehler: Ungültiges Dateiformat');
        }
      } catch (err) {
        alert('✗ Fehler beim Importieren: ' + err.message);
      }
    };
    reader.readAsText(file);
    
    // Reset input
    e.target.value = '';
  });

  // Reset button
  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('Alle Daten in localStorage löschen und Standarddaten laden?')) {
      localStorage.removeItem('personnelData');
      location.reload();
    }
  });

  // Calendar navigation (only if calendar buttons exist)
  if (document.getElementById('prev-btn')) {
    document.getElementById('prev-btn').addEventListener('click', () => {
      if (calendarViewMode === 'week') {
        calendarViewDate.setDate(calendarViewDate.getDate() - 7);
      } else if (calendarViewMode === 'month') {
        calendarViewDate.setMonth(calendarViewDate.getMonth() - 1);
      } else if (calendarViewMode === 'year') {
        calendarViewDate.setFullYear(calendarViewDate.getFullYear() - 1);
      }
      renderCalendar();
    });
  }

  if (document.getElementById('next-btn')) {
    document.getElementById('next-btn').addEventListener('click', () => {
      if (calendarViewMode === 'week') {
        calendarViewDate.setDate(calendarViewDate.getDate() + 7);
      } else if (calendarViewMode === 'month') {
        calendarViewDate.setMonth(calendarViewDate.getMonth() + 1);
      } else if (calendarViewMode === 'year') {
        calendarViewDate.setFullYear(calendarViewDate.getFullYear() + 1);
      }
      renderCalendar();
    });
  }

  // Time-off year selector
  document.getElementById('timeoff-year').addEventListener('change', (e) => {
    renderTimeOffView(parseInt(e.target.value));
  });

  // Overview controls
  document.getElementById('overview-shift').addEventListener('change', renderOverview);
  document.getElementById('overview-month').addEventListener('change', renderOverview);
  document.getElementById('overview-year').addEventListener('change', renderOverview);

  // Personnel management
  document.getElementById('add-person-btn').addEventListener('click', openPersonnelModal);
  
  // Modal close button - personnel modal
  document.getElementById('personnel-modal').querySelector('.close').addEventListener('click', closePersonnelModal);
  
  // Form submission
  document.getElementById('personnel-form').addEventListener('submit', handlePersonnelFormSubmit);
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('personnel-modal');
    if (e.target === modal) {
      closePersonnelModal();
    }
  });
}

// View switching
function switchView(viewName) {
  currentView = viewName;
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
  document.getElementById(`${viewName}-view`).classList.add('active');
}

// Sorting function
function getSortedPersonnel() {
  const sorted = [...personnel];
  
  switch (currentSort) {
    case 'name':
      return sorted.sort((a, b) => {
        const nameCompare = a.name.localeCompare(b.name);
        if (nameCompare !== 0) return nameCompare;
        const aQual = (a.qualifications && a.qualifications[0]) || '';
        const bQual = (b.qualifications && b.qualifications[0]) || '';
        return aQual.localeCompare(bQual);
      });
    case 'shift':
      return sorted.sort((a, b) => {
        const shiftOrder = { 'WA1': 1, 'WA2': 2, 'WA3': 3, 'Tagesdienst': 4 };
        return (shiftOrder[a.shift] || 5) - (shiftOrder[b.shift] || 5);
      });
    case 'qualification':
      return sorted.sort((a, b) => {
        const aQual = (a.qualifications && a.qualifications[0]) || '';
        const bQual = (b.qualifications && b.qualifications[0]) || '';
        return aQual.localeCompare(bQual);
      });
    default:
      return sorted;
  }
}

// Render table
function renderTable() {
  const tableBody = document.getElementById('table-body');
  const sortedPersonnel = getSortedPersonnel();
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  
  // Calculate current 6-month period (0-5 or 6-11)
  const periodStart = currentMonth < 6 ? 0 : 6;
  
  // Check staffing
  const staffingWarnings = checkStaffingRequirements();
  const warningsByShift = {};
  staffingWarnings.forEach(w => {
    if (!warningsByShift[w.shift]) warningsByShift[w.shift] = [];
    warningsByShift[w.shift].push(w);
  });
  
  tableBody.innerHTML = sortedPersonnel.map(person => {
    const { totalHours } = getCumulativeDiensteHours(currentYear, periodStart, person.shift);
    const balance = totalHours - 1248; // 48 hours/week × 26 weeks (6 months)
    const balanceClass = balance > 50 ? 'excess' : balance < -50 ? 'deficit' : 'balanced';
    
    // Count statuses for the current year
    const yearStart = new Date(currentYear, 0, 1);
    const yearEnd = new Date(currentYear, 11, 31);
    
    let counts = { Dienst: 0, Verfüger: 0, Dienstfrei: 0, Tagdienst: 0 };
    let current = new Date(yearStart);
    
    while (current <= yearEnd) {
      const status = getPersonStatusForDate(person, current);
      if (counts.hasOwnProperty(status)) {
        counts[status]++;
      }
      current = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1);
    }
    
    const statusBadges = `<span class="status-badge-dienst">${counts.Dienst} Dienst</span> <span class="status-badge-verfüger">${counts.Verfüger} Verfüger</span> <span class="status-badge-dienstfrei">${counts.Dienstfrei} Dienstfrei</span>`;
    
    const hasWarning = warningsByShift[person.shift] && warningsByShift[person.shift].length > 0;
    const warningIndicator = hasWarning ? '<span class="warning-indicator" title="Personalstaffing unzureichend">⚠️</span>' : '';
    
    return `
      <tr class="shift-${person.shift}">
        <td>${person.name}</td>
        <td>${(person.qualifications || []).join(', ')}</td>
        <td class="dienst-hours">${totalHours}h / 1248h <span class="balance ${balanceClass}">${balance > 0 ? '+' : ''}${balance}h</span></td>
        <td><span class="shift-badge shift-badge-${person.shift}">${person.shift}</span></td>
        <td class="warning-cell">${warningIndicator}<div class="status-counts">${statusBadges}</div></td>
      </tr>
    `;
  }).join('');
}

// Display staffing warnings
function displayStaffingWarnings() {
  const container = document.getElementById('staffing-warnings') || createStaffingWarningsContainer();
  
  // Check for issues in the next 90 days
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 90);
  
  const issues = findStaffingIssues(startDate, endDate);
  
  if (issues.length === 0) {
    container.innerHTML = '<div class="success-box">✓ Alle Schichten korrekt besetzt</div>';
    return;
  }
  
  // Group issues by shift and date
  const grouped = {};
  issues.forEach(issue => {
    const dateStr = issue.date.toLocaleDateString('de-DE');
    const key = `${dateStr}-${issue.shift}`;
    if (!grouped[key]) {
      grouped[key] = {
        date: issue.date,
        shift: issue.shift,
        issues: []
      };
    }
    grouped[key].issues.push(issue);
  });
  

  
  let html = '<div class="warning-box"><h3>⚠️ Personalstaffing Probleme in den nächsten 90 Tagen</h3><ul>';
  
  // Sort by date
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    const dateA = grouped[a].date;
    const dateB = grouped[b].date;
    return dateA - dateB;
  });
  
  sortedKeys.slice(0, 10).forEach(key => { // Show first 10 issues
    const { date, shift, issues: dayIssues } = grouped[key];
    const dateStr = date.toLocaleDateString('de-DE', { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit' });
    
    html += `<li class="staffing-issue">
      <strong>${dateStr} - ${shift}</strong>
      <button class="nav-to-date-btn" onclick="navigateToDate(new Date(${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()}), '${shift}')">📅 Zum Datum</button>
      <div class="staffing-details">
        <p><strong>Es fehlen folgende Qualifikationen:</strong></p>
        <ul>`;
    
    // Group issues by role to show all requirements
    const issuesByRole = {};
    dayIssues.forEach(issue => {
      if (issue.role !== 'Dienst (Minimum)') {
        issuesByRole[issue.role] = issue;
      }
    });
    
    // Show each qualification with its status
    Object.entries(issuesByRole).forEach(([role, issue]) => {
      const statusText = issue.have < issue.need ? `⚠️ ${issue.have}/${issue.need}` : `✓ ${issue.have}/${issue.need}`;
      html += `<li>${role}: ${statusText}</li>`;
    });
    
    // Show Dienst minimum
    const dienstIssue = dayIssues.find(i => i.role === 'Dienst (Minimum)');
    if (dienstIssue) {
      const statusText = dienstIssue.have < dienstIssue.need ? `⚠️ ${dienstIssue.have}/${dienstIssue.need}` : `✓ ${dienstIssue.have}/${dienstIssue.need}`;
      html += `<li>Dienst (Mindestanzahl): ${statusText}</li>`;
    }
    
    html += `</ul>
      </div>
    </li>`;
  });
  
  if (sortedKeys.length > 10) {
    html += `<li><em>${sortedKeys.length - 10} weitere Probleme...</em></li>`;
  }
  
  html += '</ul></div>';
  container.innerHTML = html;
}

// Navigate to a specific date in overview view
function navigateToDate(date, shift) {
  currentView = 'overview';
  
  // Switch to overview view
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
  document.getElementById('overview-view').classList.add('active');
  document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('[data-view="overview"]').classList.add('active');
  
  // Set the month and year selectors to the date
  const month = date.getMonth();
  const year = date.getFullYear();
  
  document.getElementById('overview-month').value = month.toString();
  document.getElementById('overview-year').value = year.toString();
  
  // Set the shift selector to the problematic shift
  if (shift) {
    document.getElementById('overview-shift').value = shift;
  }
  
  renderOverview();
}

function createStaffingWarningsContainer() {
  const container = document.createElement('div');
  container.id = 'staffing-warnings';
  container.style.marginBottom = '20px';
  const tableView = document.getElementById('table-view');
  tableView.insertBefore(container, tableView.firstChild);
  return container;
}

// Render calendar
function renderCalendar() {
  // Check if calendar container exists before rendering
  if (!document.getElementById('calendar-container')) return;
  
  if (calendarViewMode === 'week') {
    renderWeekView();
  } else if (calendarViewMode === 'month') {
    renderMonthView();
  } else if (calendarViewMode === 'year') {
    renderYearView();
  }
}

// Calculate Dienst hours per person per month
function getDienstePerPerson(year, month) {
  const days = new Date(year, month + 1, 0).getDate();
  let wa1Days = 0, wa2Days = 0, wa3Days = 0;
  
  for (let day = 1; day <= days; day++) {
    const date = new Date(year, month, day);
    const { cycleDay } = getShiftStatus(date);
    if (cycleDay === 0) wa1Days++;
    else if (cycleDay === 1) wa2Days++;
    else wa3Days++;
  }
  
  return { wa1Days, wa2Days, wa3Days, wa1Hours: wa1Days * 24, wa2Hours: wa2Days * 24, wa3Hours: wa3Days * 24 };
}

// Calculate cumulative Dienst hours for a 6-month period
function getCumulativeDiensteHours(year, startMonth, shift) {
  let totalHours = 0;
  let totalDays = 0;
  
  for (let m = startMonth; m < startMonth + 6; m++) {
    const actualMonth = m % 12;
    const actualYear = year + Math.floor(m / 12);
    const dienste = getDienstePerPerson(actualYear, actualMonth);
    
    if (shift === 'WA1') {
      totalDays += dienste.wa1Days;
      totalHours += dienste.wa1Hours;
    } else if (shift === 'WA2') {
      totalDays += dienste.wa2Days;
      totalHours += dienste.wa2Hours;
    } else if (shift === 'WA3') {
      totalDays += dienste.wa3Days;
      totalHours += dienste.wa3Hours;
    }
  }
  
  return { totalDays, totalHours };
}

// Check staffing requirements per shift
function checkStaffingRequirements() {
  const requirements = {
    'Wachabteilungsleiter': 1,
    'Gruppenführer': 1,
    'Notfallsanitäter': 2,
    'Maschinist': 2,
  };
  
  const warnings = [];
  const shifts = ['WA1', 'WA2', 'WA3'];
  
  shifts.forEach(shift => {
    const shiftPersonnel = personnel.filter(p => p.shift === shift);
    const staffingStatus = {};
    
    // Initialize requirements
    Object.keys(requirements).forEach(role => {
      staffingStatus[role] = { have: 0, need: requirements[role] };
    });
    
    // Count personnel by qualification
    shiftPersonnel.forEach(person => {
      if (person.qualifications) {
        person.qualifications.forEach(qual => {
          if (staffingStatus[qual]) {
            staffingStatus[qual].have++;
          }
        });
      }
    });
    
    // Check for deficits
    Object.entries(staffingStatus).forEach(([role, status]) => {
      if (status.have < status.need) {
        warnings.push({
          shift,
          role,
          have: status.have,
          need: status.need,
          deficit: status.need - status.have
        });
      }
    });
  });
  
  return warnings;
}

// Check staffing requirements for specific date
function checkStaffingByDate(date) {
  const requirements = {
    'Wachabteilungsleiter': 1,
    'Gruppenführer': 1,
    'Notfallsanitäter': 2,
    'Maschinist': 2,
  };
  
  const warnings = [];
  
  // Get the shift that's actually active on this date
  const shiftStatus = getShiftStatus(date);
  const shifts = [shiftStatus.shift]; // Only check the active shift
  
  const dateStr = getDateKey(date); // Use consistent format
  
  shifts.forEach(shift => {
    // Get personnel working this shift on this specific date (rotation-aware)
    const shiftPersonnel = getPersonnelForShiftOnDate(shift, date);
    
    // Filter by status for this specific date - only count "Dienst" for qualifications
    const dienstPersonnel = shiftPersonnel.filter(p => {
      const dailyStatus = getPersonStatusForDate(p, date);
      return dailyStatus === 'Dienst';
    });
    
    // Also track all active (Dienst or Verfüger) for display purposes
    const activePersonnel = shiftPersonnel.filter(p => {
      const dailyStatus = getPersonStatusForDate(p, date);
      return dailyStatus === 'Dienst' || dailyStatus === 'Verfüger';
    });
    
    const staffingStatus = {};
    
    // Initialize requirements
    Object.keys(requirements).forEach(role => {
      staffingStatus[role] = { have: 0, need: requirements[role] };
    });
    
    // Count qualifications ONLY from Dienst personnel
    dienstPersonnel.forEach(person => {
      if (person.qualifications) {
        person.qualifications.forEach(qual => {
          if (staffingStatus[qual]) {
            staffingStatus[qual].have++;
          }
        });
      }
    });

    
    // Check for minimum Dienst count (requirement: 9 Dienst per shift)
    const dienstCount = shiftPersonnel.filter(p => {
      const dailyStatus = getPersonStatusForDate(p, date);
      return dailyStatus === 'Dienst';
    }).length;
    
    if (dienstCount < 9) {
      warnings.push({
        shift,
        date,
        role: 'Dienst (Minimum)',
        have: dienstCount,
        need: 9,
        deficit: 9 - dienstCount
      });
    }
    
    // Check for minimum Verfüger count (requirement: 2 Verfüger per shift)
    const verfügerCount = shiftPersonnel.filter(p => {
      const dailyStatus = getPersonStatusForDate(p, date);
      return dailyStatus === 'Verfüger';
    }).length;
    
    if (verfügerCount < 2) {
      warnings.push({
        shift,
        date,
        role: 'Verfüger (Minimum)',
        have: verfügerCount,
        need: 2,
        deficit: 2 - verfügerCount
      });
    }
    
    // Check for deficits
    Object.entries(staffingStatus).forEach(([role, status]) => {
      if (status.have < status.need) {
        warnings.push({
          shift,
          date,
          role,
          have: status.have,
          need: status.need,
          deficit: status.need - status.have
        });
      }
    });
  });
  
  return warnings;
}

// Find all dates with staffing issues in a date range
function findStaffingIssues(startDate, endDate) {
  const issues = [];
  let current = new Date(startDate);
  
  while (current <= endDate) {
    const dayIssues = checkStaffingByDate(current);
    if (dayIssues.length > 0) {
      issues.push(...dayIssues);
    }
    // Create a NEW date object for the next iteration, don't mutate current
    current = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1);
  }
  
  return issues;
}

// Overview view - Monthly calendar with personnel
function renderOverview() {
  const container = document.getElementById('overview-container');
  const shift = document.getElementById('overview-shift').value;
  const month = parseInt(document.getElementById('overview-month').value);
  const year = parseInt(document.getElementById('overview-year').value);
  
  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  // We'll calculate personnel per day based on rotation, not statically
  
  // Get days in month
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  let html = `<div class="overview-calendar-container">`;
  html += `<h2 style="text-align: center; margin-bottom: 20px;">${monthNames[month]} ${year} - ${shift}</h2>`;
  
  // Day headers
  html += '<div class="overview-month-header">';
  days.forEach(day => {
    html += `<div class="overview-month-day-header">${day}</div>`;
  });
  html += '</div>';
  
  // Days grid
  html += '<div class="overview-month-days">';
  
  // Empty cells before month starts
  for (let i = 1; i < startingDayOfWeek; i++) {
    html += '<div class="overview-month-day empty"></div>';
  }
  
  // Days of month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dateYear = date.getFullYear();
    const dateMonth = String(date.getMonth() + 1).padStart(2, '0');
    const dateDay = String(date.getDate()).padStart(2, '0');
    const dateStr = `${dateYear}-${dateMonth}-${dateDay}`; // Local timezone format
    const shiftStatus = getShiftStatus(date);
    const hasDienst = shiftStatus.shift === shift;
    
    // Count Dienst and Verfüger for this day
    let dienstCount = 0;
    let verfügerCount = 0;
    
    if (hasDienst) {
      // Get the actual personnel working this shift on this date (rotation-aware)
      const shiftPersonnel = getPersonnelForShiftOnDate(shift, date);
      shiftPersonnel.forEach(p => {
        const status = getPersonStatusForDate(p, date);
        if (status === 'Dienst') dienstCount++;
        else if (status === 'Verfüger') verfügerCount++;
      });
    }
    
    html += `<div class="overview-month-day shift-${shift} ${hasDienst ? 'has-dienst' : 'no-dienst'}" onclick="showDayDetails('${shift}', '${dateStr}')">`;
    html += `<div class="overview-date">${day}</div>`;
    
    if (hasDienst) {
      html += `<div class="overview-person-count"><strong>${dienstCount}</strong> Dienst</div>`;
      html += `<div class="overview-person-count" style="color: #f39c12; font-size: 0.85rem;"><strong>${verfügerCount}</strong> Verfüger</div>`;
    } else {
      html += `<div class="overview-person-count" style="color: #999;">Frei</div>`;
    }
    
    html += `</div>`;
  }
  
  html += '</div>';
  html += '</div>';
  
  // Details panel
  html += '<div id="day-details-panel" class="day-details-panel" style="display: none;"></div>';
  
  container.innerHTML = html;
}

// Show details for a specific day
function showDayDetails(shift, dateStr) {
  // Parse date string properly to avoid timezone issues
  const parts = dateStr.split('-');
  const date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  const dayNames = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  
  // Get personnel working THIS shift on THIS date (rotation-aware, not just by assigned shift)
  const shiftPersonnel = getPersonnelForShiftOnDate(shift, date);
  const panel = document.getElementById('day-details-panel');
  
  let html = `<div class="day-details-content">`;
  html += `<button class="btn-close-details" onclick="closeDayDetails()">✕</button>`;
  html += `<h3>${dayNames[date.getDay()]}, ${date.getDate()}. ${monthNames[date.getMonth()]} ${date.getFullYear()}</h3>`;
  html += `<h4>${shift}</h4>`;
  
  html += `<table class="day-details-table">`;
  html += `<thead><tr><th>Name</th><th>Qualifikation</th><th>Status</th><th>Aktion</th></tr></thead>`;
  html += `<tbody>`;
  
  shiftPersonnel.forEach((person, idx) => {
    const personIndex = personnel.indexOf(person);
    const isTimeOff = person.timeOffDates && person.timeOffDates.includes(dateStr);
    const statusClass = isTimeOff ? 'status-timeoff' : 'status-working';
    const personStatus = getPersonStatusForDate(person, date);
    const statusBadgeClass = `status-${personStatus.toLowerCase().replace(/ä/g, 'a').replace(/ü/g, 'u').replace(/ö/g, 'o')}`;
    
    html += `<tr class="${statusClass}">`;
    html += `<td>${person.name}</td>`;
    html += `<td>${(person.qualifications || []).join(', ')}</td>`;
    html += `<td><span class="status-badge ${statusBadgeClass}">${personStatus}</span></td>`;
    html += `<td class="action-cell"><button class="btn-status-small" onclick="openStatusModalForDate(${personIndex}, new Date(${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()}))">Ändern</button></td>`;
    html += `</tr>`;
  });
  
  html += `</tbody></table>`;
  html += `</div>`;
  
  panel.innerHTML = html;
  panel.style.display = 'block';
}

// Close day details
function closeDayDetails() {
  document.getElementById('day-details-panel').style.display = 'none';
}

// Week view
function renderWeekView() {
  const container = document.getElementById('calendar-container');
  const titleElement = document.getElementById('calendar-title');
  
  const weekStart = new Date(calendarViewDate);
  let dayOfWeek = weekStart.getDay();
  if (dayOfWeek === 0) dayOfWeek = 7; // Sunday to 7
  weekStart.setDate(weekStart.getDate() - dayOfWeek + 1);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  titleElement.textContent = `Woche: ${weekStart.toLocaleDateString('de-DE', options)} - ${weekEnd.toLocaleDateString('de-DE', options)}`;
  
  const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  let calendarHTML = '<div class="calendar-grid week-view">';
  
  // Day headers with dates
  calendarHTML += '<div class="calendar-header">';
  calendarHTML += '<div class="shift-label-header"></div>'; // Empty corner
  days.forEach((day, i) => {
    const date = new Date(weekStart);
    date.setDate(date.getDate() + i);
    calendarHTML += `<div class="day-header">${day}<br><small>${date.getDate()}.${date.getMonth() + 1}.</small></div>`;
  });
  calendarHTML += '</div>';
  
  const shifts = ['WA1', 'WA2', 'WA3'];
  shifts.forEach(shift => {
    const shiftIndex = shifts.indexOf(shift);
    calendarHTML += `<div class="shift-row" data-shift="${shift}">`;
    calendarHTML += `<div class="shift-label shift-label-${shift}">${shift}</div>`;
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(date.getDate() + i);
      
      const { cycleDay } = getShiftStatus(date);
      const hasDienst = cycleDay === shiftIndex;
      
      calendarHTML += `<div class="calendar-day ${hasDienst ? 'on-shift' : 'off-shift'} shift-${shift}">`;
      calendarHTML += `<div class="shift-status">${hasDienst ? 'Dienst' : 'Frei'}</div>`;
      calendarHTML += `</div>`;
    }
    calendarHTML += '</div>';
  });
  
  calendarHTML += '</div>';
  container.innerHTML = calendarHTML;
}

// Month view
function renderMonthView() {
  const container = document.getElementById('calendar-container');
  const titleElement = document.getElementById('calendar-title');
  
  const year = calendarViewDate.getFullYear();
  const month = calendarViewDate.getMonth();
  
  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  titleElement.textContent = `${monthNames[month]} ${year}`;
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  let calendarHTML = '<div class="month-view">';
  
  // Day headers
  calendarHTML += '<div class="month-header">';
  days.forEach(day => {
    calendarHTML += `<div class="month-day-header">${day}</div>`;
  });
  calendarHTML += '</div>';
  
  // Days grid
  calendarHTML += '<div class="month-days">';
  
  // Empty cells for days before month starts
  for (let i = 1; i < startingDayOfWeek; i++) {
    calendarHTML += '<div class="month-day empty"></div>';
  }
  
  // Days of month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const { cycleDay, shifts } = getShiftStatus(date);
    const activeShift = shifts[cycleDay];
    
    let dayHTML = `<div class="month-day shift-${activeShift}">`;
    dayHTML += `<div class="month-date">${day}</div>`;
    dayHTML += `<div class="month-shifts">`;
    
    dayHTML += `<div class="mini-shift shift-${activeShift} on-shift">${activeShift}</div>`;
    
    dayHTML += `</div></div>`;
    calendarHTML += dayHTML;
  }
  
  calendarHTML += '</div></div>';
  container.innerHTML = calendarHTML;
}

// Year view
function renderYearView() {
  const container = document.getElementById('calendar-container');
  const titleElement = document.getElementById('calendar-title');
  
  const year = calendarViewDate.getFullYear();
  titleElement.textContent = `${year}`;
  
  const monthNames = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  let calendarHTML = '<div class="year-view">';
  
  for (let month = 0; month < 12; month++) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    calendarHTML += `<div class="year-month">`;
    calendarHTML += `<div class="year-month-title">${monthNames[month]}</div>`;
    calendarHTML += `<div class="year-month-days">`;
    
    // Empty cells
    for (let i = 1; i < startingDayOfWeek; i++) {
      calendarHTML += '<div class="year-day empty"></div>';
    }
    
    // Days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const { cycleDay } = getShiftStatus(date);
      const shifts = ['WA1', 'WA2', 'WA3'];
      const activeShift = shifts[cycleDay];
      
      calendarHTML += `<div class="year-day shift-${activeShift}" title="${day}.${month + 1}.${year} - ${activeShift}">${day}</div>`;
    }
    
    calendarHTML += `</div></div>`;
  }
  
  calendarHTML += '</div>';
  container.innerHTML = calendarHTML;
}

// Load personnel from localStorage
function loadPersonnelData() {
  const savedData = localStorage.getItem('personnelData');
  if (savedData) {
    try {
      personnel = JSON.parse(savedData);
    } catch (e) {
      // If saved data is corrupted, use defaults
      savePersonnelData();
    }
  } else {
    // First time - save default data
    savePersonnelData();
  }
}

// Save personnel to localStorage
function savePersonnelData() {
  localStorage.setItem('personnelData', JSON.stringify(personnel));
}

// Render personnel list for management
function renderPersonnelList() {
  const container = document.getElementById('personnel-list');
  const sortedPersonnel = getSortedPersonnel();
  
  // Render qualification statistics
  renderQualificationStats();
  
  container.innerHTML = sortedPersonnel.map((person, idx) => {
    const actualIndex = personnel.indexOf(person);
    const addressLine = person.strasse || person.hausnummer || person.stadt || person.postleitzahl 
      ? `${person.strasse || ''} ${person.hausnummer || ''}, ${person.postleitzahl || ''} ${person.stadt || ''}`.trim()
      : '';
    return `
      <div class="personnel-card">
        <div class="personnel-info">
          <h3>${person.name} ${person.geburtsdatum ? `<span style="font-size: 0.8rem; color: #666; display: block; margin-top: 4px;">geb. ${person.geburtsdatum}</span>` : ''}</h3>
          <p><strong>Qualifikationen:</strong> ${(person.qualifications || []).join(', ') || 'Keine'}</p>
          <p><strong>Schicht:</strong> <span class="shift-badge shift-badge-${person.shift}">${person.shift}</span></p>
          ${person.phoneHandy ? `<p><strong>Handy:</strong> ${person.phoneHandy}</p>` : ''}
          ${person.phoneFestnetz ? `<p><strong>Festnetz:</strong> ${person.phoneFestnetz}</p>` : ''}
          ${person.phoneDienst ? `<p><strong>Dienst:</strong> ${person.phoneDienst}</p>` : ''}
          ${addressLine ? `<p><strong>Adresse:</strong> ${addressLine}</p>` : ''}
          ${person.waeschenummer ? `<p><strong>Wäschenummer:</strong> ${person.waeschenummer}</p>` : ''}
        </div>
        <div class="personnel-actions">
          <button class="btn-edit" onclick="editPerson(${actualIndex})">Bearbeiten</button>
          <button class="btn-delete" onclick="deletePerson(${actualIndex})">Löschen</button>
        </div>
      </div>
    `;
  }).join('');
}

// Render qualification statistics by shift
function renderQualificationStats() {
  const statsContainer = document.getElementById('qualifications-stats');
  const shifts = ['WA1', 'WA2', 'WA3', 'Tagesdienst'];
  const allQualifications = ['Leiter der Feuerwehr', 'Zugführer', 'Gruppenführer', 'Wachabteilungsleiter', 'Notfallsanitäter', 'Maschinist', 'Praxisanleiter', 'Praktikant', 'Angestellte/er', 'Tagesdienst Verwaltung'];
  
  let statsHtml = '';
  
  shifts.forEach(shift => {
    const shiftPersonnel = personnel.filter(p => p.shift === shift);
    const qualStats = {};
    
    // Count qualifications for this shift
    allQualifications.forEach(qual => {
      const count = shiftPersonnel.filter(p => p.qualifications && p.qualifications.includes(qual)).length;
      if (count > 0) {
        qualStats[qual] = count;
      }
    });
    
    // Build display text for this shift
    const qualList = Object.entries(qualStats)
      .map(([qual, count]) => `${count} ${qual}`)
      .join(', ');
    
    if (qualList) {
      statsHtml += `<div><strong>${shift}:</strong> ${qualList}</div>`;
    } else {
      statsHtml += `<div><strong>${shift}:</strong> Keine Qualifikationen</div>`;
    }
  });
  
  statsContainer.innerHTML = statsHtml;
}

// Open modal for adding new person
function openPersonnelModal() {
  editingIndex = null;
  document.getElementById('modal-title').textContent = 'Personal hinzufügen';
  document.getElementById('personnel-form').reset();
  document.getElementById('personnel-modal').style.display = 'block';
}

// Open modal for editing person
function editPerson(index) {
  editingIndex = index;
  const person = personnel[index];
  document.getElementById('modal-title').textContent = 'Personal bearbeiten';
  document.getElementById('person-name').value = person.name;
  document.getElementById('person-shift').value = person.shift;
  document.getElementById('person-geburtsdatum').value = person.geburtsdatum || '';
  document.getElementById('person-phone-handy').value = person.phoneHandy || '';
  document.getElementById('person-phone-festnetz').value = person.phoneFestnetz || '';
  document.getElementById('person-phone-dienst').value = person.phoneDienst || '';
  document.getElementById('person-strasse').value = person.strasse || '';
  document.getElementById('person-hausnummer').value = person.hausnummer || '';
  document.getElementById('person-stadt').value = person.stadt || '';
  document.getElementById('person-postleitzahl').value = person.postleitzahl || '';
  document.getElementById('person-waeschenummer').value = person.waeschenummer || '';
  
  // Set qualifications as selected
  const qualificationCheckboxes = document.querySelectorAll('input[name="qualifications"]');
  qualificationCheckboxes.forEach(checkbox => {
    checkbox.checked = person.qualifications.includes(checkbox.value);
  });
  
  document.getElementById('personnel-modal').style.display = 'block';
}

// Close modal
function closePersonnelModal() {
  document.getElementById('personnel-modal').style.display = 'none';
  editingIndex = null;
}

// Delete person
function deletePerson(index) {
  if (confirm('Möchten Sie diese Person wirklich löschen?')) {
    personnel.splice(index, 1);
    savePersonnelData();
    renderPersonnelList();
    renderTable();
    displayStaffingWarnings();
    renderCalendar();
  }
}

// Status management
function openStatusModal(personIndex) {
  const person = personnel[personIndex];
  const statuses = ['Dienst', 'Verfüger', 'Dienstfrei', 'Lehrgang', 'Tagesdienst', 'Abwesent'];
  
  let html = `<div class="status-form">`;
  html += `<p><strong>${person.name}</strong> (${person.shift})</p>`;
  html += `<label>Wählen Sie neuen Status:</label>`;
  html += `<div class="status-buttons">`;
  
  statuses.forEach(status => {
    const isSelected = person.defaultStatus === status ? 'selected' : '';
    html += `<button class="status-button ${isSelected}" onclick="updatePersonDefaultStatus(${personIndex}, '${status}'); return false;">${status}</button>`;
  });
  
  html += `</div>`;
  html += `</div>`;
  
  document.getElementById('status-modal-body').innerHTML = html;
  document.getElementById('status-modal').style.display = 'block';
}

function openStatusModal(personIndex, date = null) {
  const person = personnel[personIndex];
  const statuses = ['Dienst', 'Verfüger', 'Dienstfrei', 'Lehrgang', 'Tagesdienst', 'Abwesent'];
  
  let html = `<div class="status-form">`;
  html += `<p><strong>${person.name}</strong> (${person.shift})`;
  if (date) {
    html += `<br><small>${date.toLocaleDateString('de-DE')}</small>`;
  }
  html += `</p>`;
  html += `<label>Wählen Sie neuen Status:</label>`;
  html += `<div class="status-buttons">`;
  
  // Get current status (either daily or default)
  let currentStatus = person.defaultStatus;
  if (date) {
    const dateKey = getDateKey(date); // Use consistent format
    currentStatus = person.dailyStatus[dateKey] || person.defaultStatus;
  }
  
  statuses.forEach(status => {
    const isSelected = currentStatus === status ? 'selected' : '';
    const onclick = date 
      ? `updatePersonDailyStatus(${personIndex}, new Date(${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()}), '${status}')`
      : `updatePersonDefaultStatus(${personIndex}, '${status}')`;
    html += `<button class="status-button ${isSelected}" onclick="${onclick}; return false;">${status}</button>`;
  });
  
  html += `</div>`;
  html += `</div>`;
  
  document.getElementById('status-modal-body').innerHTML = html;
  document.getElementById('status-modal').style.display = 'block';
}

function openStatusModalFromDay(personIndex) {
  openStatusModal(personIndex);
}

function openStatusModalForDate(personIndex, date) {
  openStatusModal(personIndex, date);
}

function updatePersonStatus(personIndex, newStatus) {
  personnel[personIndex].defaultStatus = newStatus;
  savePersonnelData();
  renderTable();
  displayStaffingWarnings();
  renderOverview(); // Refresh the overview calendar
  closeStatusModal();
}

function updatePersonDefaultStatus(personIndex, newStatus) {
  personnel[personIndex].defaultStatus = newStatus;
  savePersonnelData();
  renderTable();
  displayStaffingWarnings();
  renderOverview();
  closeStatusModal();
}

function updatePersonDailyStatus(personIndex, date, newStatus) {
  const dateKey = getDateKey(date); // Use consistent date key format
  if (!personnel[personIndex].dailyStatus) {
    personnel[personIndex].dailyStatus = {};
  }
  personnel[personIndex].dailyStatus[dateKey] = newStatus;
  savePersonnelData();
  renderOverview(); // Refresh the overview calendar
  displayStaffingWarnings(); // Refresh warnings
  closeStatusModal();
}

// Get person's status for a specific date (daily override or calculated default)
function getPersonStatusForDate(person, date) {
  // Check for daily override first
  if (person.dailyStatus) {
    const dateKey = getDateKey(date); // Use consistent date key format
    if (person.dailyStatus[dateKey]) {
      return person.dailyStatus[dateKey];
    }
  }
  
  // Check if this person is scheduled for the active shift on this date
  const shiftStatus = getShiftStatus(date);
  const activeShift = shiftStatus.shift;
  
  // Check if this person is in the group working the active shift on this date
  const shiftPersonnel = getPersonnelForShiftOnDate(activeShift, date);
  const isWorkingThisDay = shiftPersonnel.includes(person);
  
  // If NOT working this day based on rotation, they're not available
  if (!isWorkingThisDay) {
    return 'Nicht eingeteilt';
  }
  
  // If working this day, return their defaultStatus (Dienst or Verfüger)
  // This respects the "Alle Schichten Zuweisen" assignments
  if (person.defaultStatus) {
    return person.defaultStatus;
  }
  
  // Fallback: calculate position-based status (for legacy behavior)
  const personIndex = personnel.indexOf(person);
  const positionInGroup = personIndex % 11; // 0-10
  
  // Rotate Verfüger assignments: every 11 days, shift which positions are Verfüger
  // This ensures all 11 people in a group get turns as Verfüger
  const refDate = new Date(2026, 0, 1);
  const daysDiff = Math.floor((date - refDate) / (1000 * 60 * 60 * 24));
  const verfügerRotation = Math.floor(daysDiff / 11) % 11; // Rotates every 11 days
  
  // Positions 9 and 10 get shifted by the rotation
  const verfügerPos1 = (9 + verfügerRotation) % 11;
  const verfügerPos2 = (10 + verfügerRotation) % 11;
  
  if (positionInGroup === verfügerPos1 || positionInGroup === verfügerPos2) {
    return 'Verfüger';
  } else {
    return 'Dienst';
  }
}

function closeStatusModal() {
  document.getElementById('status-modal').style.display = 'none';
}

// Save form submission
function handlePersonnelFormSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById('person-name').value;
  const shift = document.getElementById('person-shift').value;
  const geburtsdatum = document.getElementById('person-geburtsdatum').value;
  const phoneHandy = document.getElementById('person-phone-handy').value;
  const phoneFestnetz = document.getElementById('person-phone-festnetz').value;
  const phoneDienst = document.getElementById('person-phone-dienst').value;
  const strasse = document.getElementById('person-strasse').value;
  const hausnummer = document.getElementById('person-hausnummer').value;
  const stadt = document.getElementById('person-stadt').value;
  const postleitzahl = document.getElementById('person-postleitzahl').value;
  const waeschenummer = document.getElementById('person-waeschenummer').value;
  
  // Get selected qualifications
  const qualificationCheckboxes = document.querySelectorAll('input[name="qualifications"]:checked');
  const qualifications = Array.from(qualificationCheckboxes).map(cb => cb.value);
  
  if (qualifications.length === 0) {
    alert('Bitte wählen Sie mindestens eine Qualifikation');
    return;
  }
  
  if (editingIndex !== null) {
    // Update existing
    personnel[editingIndex] = { 
      ...personnel[editingIndex], 
      name, 
      shift, 
      qualifications,
      geburtsdatum,
      phoneHandy,
      phoneFestnetz,
      phoneDienst,
      strasse,
      hausnummer,
      stadt,
      postleitzahl,
      waeschenummer
    };
  } else {
    // Add new
    personnel.push({ 
      name, 
      shift, 
      qualifications,
      defaultStatus: 'Dienst',
      geburtsdatum,
      phoneHandy,
      phoneFestnetz,
      phoneDienst,
      strasse,
      hausnummer,
      stadt,
      postleitzahl,
      waeschenummer,
      dailyStatus: {}, 
      timeOffDates: [], 
      shiftHistory: [] 
    });
  }
  
  savePersonnelData();
  closePersonnelModal();
  
  // Show save confirmation
  const saveMsg = document.createElement('div');
  saveMsg.textContent = '✓ Gespeichert';
  saveMsg.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #27ae60; color: white; padding: 12px 20px; border-radius: 5px; z-index: 9999; font-weight: bold;';
  document.body.appendChild(saveMsg);
  setTimeout(() => saveMsg.remove(), 2000);
  
  renderPersonnelList();
  renderTable();
  displayStaffingWarnings();
  renderCalendar();
}

// Time-off management functions
function renderTimeOffView(year) {
  const container = document.getElementById('timeoff-container');
  const warningsContainer = document.getElementById('timeoff-warnings');
  
  // Check for over-bookings
  const warnings = checkTimeOffConflicts(year);
  
  if (warnings.length > 0) {
    warningsContainer.innerHTML = `
      <div class="warning-box">
        <h3>⚠️ Warnung: Zu viele Personen frei</h3>
        <ul>
          ${warnings.map(w => `<li>${w}</li>`).join('')}
        </ul>
      </div>
    `;
  } else {
    warningsContainer.innerHTML = '<div class="success-box">✓ Alle Dienste korrekt verteilt</div>';
  }
  
  // Build time-off grid
  let html = '<div class="timeoff-grid">';
  const shifts = ['WA1', 'WA2', 'WA3'];
  
  shifts.forEach(shift => {
    const shiftPersonnel = personnel.filter(p => p.shift === shift);
    
    html += `<div class="timeoff-shift-section">`;
    html += `<h3 class="timeoff-shift-title">${shift}</h3>`;
    
    shiftPersonnel.forEach((person, idx) => {
      const personIndex = personnel.indexOf(person);
      const timeOffCount = person.timeOffDates ? person.timeOffDates.filter(d => {
        const dateObj = new Date(d);
        return dateObj.getFullYear() === year;
      }).length : 0;
      
      html += `<div class="timeoff-person-card">`;
      html += `<div class="timeoff-person-info">`;
      html += `<h4>${person.name}</h4>`;
      html += `<p>${(person.qualifications || []).join(', ') || 'Keine'}</p>`;
      html += `<p class="timeoff-count">Dienste frei: <strong>${timeOffCount}/16</strong></p>`;
      html += `</div>`;
      html += `<button class="btn-edit" onclick="openTimeOffModal(${personIndex}, ${year})">Verwalten</button>`;
      html += `</div>`;
    });
    
    html += `</div>`;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

function checkTimeOffConflicts(year) {
  const warnings = [];
  const shifts = ['WA1', 'WA2', 'WA3'];
  
  shifts.forEach(shift => {
    const shiftPersonnel = personnel.filter(p => p.shift === shift);
    
    // Collect all off dates for this shift
    const dateCount = {};
    shiftPersonnel.forEach(person => {
      if (person.timeOffDates) {
        person.timeOffDates.forEach(dateStr => {
          const dateObj = new Date(dateStr);
          if (dateObj.getFullYear() === year) {
            dateCount[dateStr] = (dateCount[dateStr] || 0) + 1;
          }
        });
      }
    });
    
    // Check for more than 3 people off on same date
    Object.entries(dateCount).forEach(([dateStr, count]) => {
      if (count > 3) {
        const date = new Date(dateStr);
        const formattedDate = date.toLocaleDateString('de-DE');
        warnings.push(`${shift}: ${count} Personen frei am ${formattedDate} (max. 3 erlaubt)`);
      }
    });
  });
  
  return warnings;
}

function openTimeOffModal(personIndex, year) {
  const person = personnel[personIndex];
  const thisYearDates = person.timeOffDates ? person.timeOffDates.filter(d => {
    const dateObj = new Date(d);
    return dateObj.getFullYear() === year;
  }) : [];
  
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
      <h2>${person.name} - ${(person.qualifications || []).join(', ') || 'Keine Qualifikation'}</h2>
      <p>Dienste frei im Jahr ${year} (max. 16)</p>
      <div id="timeoff-date-input">
        <label>Dienst hinzufügen:</label>
        <input type="date" id="timeoff-date-picker" value="${new Date().toISOString().split('T')[0]}">
        <button onclick="addTimeOffDate(${personIndex}, '${year}')">Hinzufügen</button>
      </div>
      <div id="timeoff-list">
        <h4>Gewählte Dienste:</h4>
        <ul id="timeoff-dates-list">
          ${thisYearDates.map((dateStr, idx) => `
            <li>
              ${new Date(dateStr).toLocaleDateString('de-DE')}
              <button class="btn-delete-small" onclick="removeTimeOffDate(${personIndex}, '${dateStr}')">✕</button>
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="form-actions">
        <button class="btn-secondary" onclick="this.closest('.modal').remove()">Schließen</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  modal.style.display = 'block';
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

function addTimeOffDate(personIndex, year) {
  const datePicker = document.getElementById('timeoff-date-picker');
  const dateStr = datePicker.value;
  const dateObj = new Date(dateStr);
  
  if (dateObj.getFullYear().toString() !== year) {
    alert(`Bitte wählen Sie ein Datum aus dem Jahr ${year}`);
    return;
  }
  
  const person = personnel[personIndex];
  if (!person.timeOffDates) {
    person.timeOffDates = [];
  }
  
  const thisYearCount = person.timeOffDates.filter(d => {
    const d2 = new Date(d);
    return d2.getFullYear() === parseInt(year);
  }).length;
  
  if (thisYearCount >= 16) {
    alert('Maximale Anzahl von 16 Diensten frei pro Jahr erreicht');
    return;
  }
  
  if (person.timeOffDates.includes(dateStr)) {
    alert('Dieser Dienst ist bereits hinzugefügt');
    return;
  }
  
  person.timeOffDates.push(dateStr);
  savePersonnelData();
  renderTimeOffView(parseInt(year));
  
  // Close the modal
  document.querySelector('.modal').remove();
}

function removeTimeOffDate(personIndex, dateStr) {
  const person = personnel[personIndex];
  person.timeOffDates = person.timeOffDates.filter(d => d !== dateStr);
  savePersonnelData();
  
  const year = new Date(dateStr).getFullYear();
  renderTimeOffView(year);
}

// Toggle config panel visibility
function toggleConfigPanel() {
  const panel = document.getElementById('config-panel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

// Auto-sort personnel based on requirements
function autoSortPersonnel() {
  const requirements = {
    notfallsanitaeter: parseInt(document.getElementById('req-notfallsanitaeter').value) || 2,
    maschinist: parseInt(document.getElementById('req-maschinist').value) || 2,
    wachabteilungsleiter: parseInt(document.getElementById('req-wachabteilungsleiter').value) || 1,
    gruppenfuhrer: parseInt(document.getElementById('req-gruppenfuhrer').value) || 1
  };

  const qualificationMap = {
    'Notfallsanitäter': 'notfallsanitaeter',
    'Maschinist': 'maschinist',
    'Wachabteilungsleiter': 'wachabteilungsleiter',
    'Gruppenführer': 'gruppenfuhrer'
  };

  // Reset all personnel to "Verfüger" first
  personnel.forEach(person => {
    person.defaultStatus = 'Verfüger';
  });

  // For each WA, assign only the required people
  const shifts = ['WA1', 'WA2', 'WA3', 'Tagesdienst'];
  const assignmentSummary = {};

  shifts.forEach(wa => {
    const waPersonnel = personnel.filter(p => p.shift === wa);
    
    assignmentSummary[wa] = {
      total: waPersonnel.length,
      assigned: 0,
      breakdown: {}
    };

    // For each required qualification, pick the needed people
    Object.keys(requirements).forEach(qualKey => {
      const qualName = Object.keys(qualificationMap).find(k => qualificationMap[k] === qualKey);
      const needed = requirements[qualKey];
      
      // Find people with this qualification who aren't already assigned
      const candidates = waPersonnel.filter(p => 
        p.qualifications && p.qualifications.includes(qualName) &&
        p.defaultStatus !== 'Dienst'
      );
      
      // Assign up to the needed amount
      const assigned = candidates.slice(0, needed);
      assigned.forEach(person => {
        person.defaultStatus = 'Dienst';
        assignmentSummary[wa].assigned++;
      });
      
      assignmentSummary[wa].breakdown[qualName] = assigned.length;
    });
  });

  savePersonnelData();
  renderPersonnelList();
  
  // Show detailed summary
  let summaryMsg = '✓ Personal automatisch zugewiesen!\n\n';
  shifts.forEach(wa => {
    if (assignmentSummary[wa]) {
      const summary = assignmentSummary[wa];
      summaryMsg += `${wa}: ${summary.assigned}/${summary.total} Dienst\n`;
      
      // Show breakdown by qualification if we have it
      if (Object.keys(summary.breakdown).length > 0) {
        const breakdown = Object.entries(summary.breakdown)
          .filter(([, count]) => count > 0)
          .map(([qual, count]) => `${count}x ${qual}`)
          .join(', ');
        if (breakdown) {
          summaryMsg += `  (${breakdown})\n`;
        }
      }
    }
  });
  summaryMsg += '\nSie können Zuweisungen jetzt manuell anpassen.';
  
  alert(summaryMsg);
  toggleConfigPanel();
}

// Initialize event listeners
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('toggle-config-btn')?.addEventListener('click', toggleConfigPanel);
  document.getElementById('apply-config-btn')?.addEventListener('click', autoSortPersonnel);
  document.getElementById('single-day-btn')?.addEventListener('click', openSingleDayModal);
});

// Single Day Assignment Functions
function openSingleDayModal() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('single-day-date').value = today;
  document.getElementById('single-day-shift').value = 'WA1';
  renderSingleDayPersonnelList('WA1');
  document.getElementById('single-day-modal').style.display = 'block';
}

function closeSingleDayModal() {
  document.getElementById('single-day-modal').style.display = 'none';
  currentSingleDayDate = null;
  currentSingleDayShift = null;
}

function renderSingleDayPersonnelList(shiftName) {
  currentSingleDayShift = shiftName;
  const container = document.getElementById('single-day-personnel-list');
  const shiftPersonnel = personnel.filter(p => p.shift === shiftName);
  const selectedDate = document.getElementById('single-day-date').value;
  const dateKey = selectedDate.replace(/-/g, '');
  
  container.innerHTML = shiftPersonnel.map((person, idx) => {
    const actualIndex = personnel.indexOf(person);
    const isSelected = person.dailyStatus[dateKey] === 'Dienst' || 
                       (person.dailyStatus[dateKey] === undefined && person.defaultStatus === 'Dienst');
    return `
      <label style="display: flex; align-items: center; gap: 10px; padding: 8px; border-radius: 4px; margin-bottom: 5px;">
        <input type="checkbox" class="single-day-checkbox" value="${actualIndex}" ${isSelected ? 'checked' : ''}>
        <span>${person.name} (${(person.qualifications || []).join(', ')})</span>
      </label>
    `;
  }).join('');
}

function saveSingleDayAssignment() {
  const dateInput = document.getElementById('single-day-date').value;
  const shiftName = document.getElementById('single-day-shift').value;
  
  if (!dateInput) {
    alert('Bitte wählen Sie ein Datum');
    return;
  }
  
  const dateKey = dateInput.replace(/-/g, '');
  const selectedCheckboxes = document.querySelectorAll('.single-day-checkbox:checked');
  const selectedIndices = Array.from(selectedCheckboxes).map(cb => parseInt(cb.value));
  
  // Reset all personnel for this date and shift
  personnel.forEach((person, idx) => {
    if (person.shift === shiftName) {
      if (!person.dailyStatus) person.dailyStatus = {};
      if (selectedIndices.includes(idx)) {
        person.dailyStatus[dateKey] = 'Dienst';
      } else {
        delete person.dailyStatus[dateKey];
      }
    }
  });
  
  savePersonnelData();
  closeSingleDayModal();
  renderTable();
  renderCalendar();
  alert(`Personal für ${dateInput} - ${shiftName} gespeichert!`);
}

// Update personnel list when date or shift changes
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('single-day-date')?.addEventListener('change', function() {
    const shift = document.getElementById('single-day-shift').value;
    renderSingleDayPersonnelList(shift);
  });
  
  document.getElementById('single-day-shift')?.addEventListener('change', function() {
    renderSingleDayPersonnelList(this.value);
  });
});

// Date Picker Functions
function openDatePicker(fieldId) {
  currentDatePickerField = fieldId;
  const input = document.getElementById(fieldId);
  if (input.value) {
    const parts = input.value.split('.');
    if (parts.length === 3) {
      datePickerYear = parseInt(parts[2]);
      datePickerMonth = parseInt(parts[1]) - 1;
    }
  } else {
    datePickerYear = new Date().getFullYear() - 20;
    datePickerMonth = 0;
  }
  renderDatePicker();
  document.getElementById('date-picker-modal').style.display = 'block';
}

function closeDatePicker() {
  document.getElementById('date-picker-modal').style.display = 'none';
  currentDatePickerField = null;
}

function renderDatePicker() {
  document.getElementById('date-picker-year-input').value = datePickerYear;
  
  // Render month selector
  const monthSelector = document.getElementById('month-selector');
  const monthNames = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  let monthHtml = '';
  monthNames.forEach((month, idx) => {
    const activeClass = idx === datePickerMonth ? 'active' : '';
    monthHtml += `<button type="button" class="month-btn ${activeClass}" onclick="setDatePickerMonth(${idx})">${month}</button>`;
  });
  monthSelector.innerHTML = monthHtml;
  
  // Render calendar
  const calendar = document.getElementById('date-picker-calendar');
  const firstDay = new Date(datePickerYear, datePickerMonth, 1).getDay();
  const lastDate = new Date(datePickerYear, datePickerMonth + 1, 0).getDate();
  
  let html = '';
  
  // Day headers
  const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  dayNames.forEach(day => {
    html += `<div class="calendar-day-header">${day}</div>`;
  });
  
  // Empty cells before month starts
  for (let i = 0; i < firstDay; i++) {
    html += '<div class="calendar-day empty"></div>';
  }
  
  // Days of month
  for (let day = 1; day <= lastDate; day++) {
    html += `<button type="button" class="calendar-day" onclick="selectDate(${day})">${day}</button>`;
  }
  
  calendar.innerHTML = html;
}

function selectDate(day) {
  const month = (datePickerMonth + 1).toString().padStart(2, '0');
  const dayStr = day.toString().padStart(2, '0');
  const dateStr = `${dayStr}.${month}.${datePickerYear}`;
  
  document.getElementById(currentDatePickerField).value = dateStr;
  closeDatePicker();
}

function setDatePickerYearFromInput() {
  const input = document.getElementById('date-picker-year-input');
  const year = parseInt(input.value);
  if (!isNaN(year) && year >= 1900 && year <= 2100) {
    datePickerYear = year;
    renderDatePicker();
  }
}

function setDatePickerMonth(month) {
  datePickerMonth = month;
  renderDatePicker();
}
