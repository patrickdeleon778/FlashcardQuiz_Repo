// https://opentdb.com/api_category.php

import axios from 'axios';

export default axios.create({
    baseURL: 'https://opentdb.com/api_category.php',
})