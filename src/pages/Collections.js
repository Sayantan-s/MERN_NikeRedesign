import { Box, Page, ProductCard, Typography,Button } from 'components';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import http from 'utils/http';

const Collections = () => {
    const [productData, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await http.get('api/products');
            setData(data);
        })();
    }, []);
    return (
        <Page className="flex py-10">
            <Box>
                 <Typography className="font-bold font-body text-3xl text-gray-900" as={motion.pre}>
                Man Shoes
            </Typography>
            <Button>
                Filter
            </Button>
            </Box>
            <Box className="w-2/12" as={motion.aside}>
              filter
            </Box>
            <Box className="w-10/12">
                {productData.data?.map(({ _id, ...data }) => (
                    <ProductCard
                        {...data}
                        key={_id}
                        className="w-1/3 flex flex-col float-left p-5"
                    />
                ))}
            </Box>
        </Page>
    );
};

export default Collections;
