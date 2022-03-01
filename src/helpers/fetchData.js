/**
 * makes request and returns geoJson data
 * @returns Promise
 */
export const fetchData = async () => {
  const req = await fetch(
    "https://arcgis.dvrpc.org/portal/rest/services/Demographics/IPD_2019/FeatureServer/0/query?where=1%3D1&geometryPrecision=5&outfields=ipd_score,d_score,em_score,f_score,fb_score,lep_score,li_score,oa_score,rm_score,y_score&f=geojson"
  );
  const res = await req.json();
  console.log(res);
  return res;
};
