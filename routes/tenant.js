const express = require('express');

const { getTenantsByName,
    getAllTenants,
    getDebtfulTenants,
    getDebtlessTenants,
    postNewTenant,
    putUpdateTenant,
    deleteTenant 
} = require('../controllers/tenant');
const { authenticateToken } = require('../utils/authenticateToken');

const router = express.Router();

router.get('/namewise/:name', authenticateToken, getTenantsByName);
router.get('/all', authenticateToken, getAllTenants);
router.get('/debt', authenticateToken, getDebtfulTenants);
router.get('/debtless', authenticateToken, getDebtlessTenants);

router.post('/new', authenticateToken, postNewTenant);
router.put('/edit', authenticateToken, putUpdateTenant);
router.put('/delete', authenticateToken, deleteTenant);


module.exports = router;