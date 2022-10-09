import "./ResultsTop.css";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import { BookmarkBorderOutlined, Map } from "@mui/icons-material";

function ResultsTop() {
  return (
    <div id="results-header">
      <strong>3 apartamentos para alugar em Balneário Camboriú</strong>
      <div>
        <div>
            <button id="mapaBt"><Map/>Mapa</button>
            <button id="salvarBt"><BookmarkBorderOutlined/>Salvar busca</button>
        </div>
        <FormControl>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={0}
            label="Age"
            >
            <MenuItem value={0}>Mais relevantes</MenuItem>
            <MenuItem value={1}>Mais recente</MenuItem>
            <MenuItem value={2}>Menor preço</MenuItem>
            <MenuItem value={3}>Maior área</MenuItem>
            </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default ResultsTop;
