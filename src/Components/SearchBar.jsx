import {SearchArea, DevicesSearchBar, searchTextStyle, textStyle} from "../Styled-Components/DevicesSearchBar";

function SearchBar() {
    return (<SearchArea>
            <DevicesSearchBar id="custom-css-outlined-input" label="Search Device" variant="outlined"
                              InputLabelProps={{
                                  sx: {
                                      ...textStyle
                                  },
                              }}
                              inputProps={{
                                  sx: {
                                      ...searchTextStyle
                                  },
                              }}
                              fullWidth={true}
            />
        </SearchArea>)
}

export default SearchBar;