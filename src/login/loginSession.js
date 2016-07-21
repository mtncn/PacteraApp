/**
 * Created by vision on 16/2/1.
 */
module.exports = function () {
    this.create = function (sessionId, userId, userRole,station,companyId,name) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
        this.station = station;
        this.companyId = companyId;
        localStorage.companyId = companyId;

        this.name = name;
    };
    this.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
        this.station = null;
        this.companyId = null;
        this.name = null;
    };
    return this;
};

