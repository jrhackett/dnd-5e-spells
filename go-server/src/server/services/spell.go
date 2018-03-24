package services

import (
	"server/daos"
	"server/models"
)

type (
	// SpellService specifies the interface for the spell service needed by spellResource.
	SpellService interface {
		Get(id int) (*models.Spells, error)
	}

	// SpellServiceImpl provides services related with spells.
	SpellServiceImpl struct{ dao daos.SpellDAO }
)

// NewSpellService creates a new SpellService with the given spell DAO.
func NewSpellService(dao daos.SpellDAO) SpellService {
	return &SpellServiceImpl{dao}
}

// Get for SpellService
func (s SpellServiceImpl) Get(id int) (*models.Spells, error) {
	return s.dao.Get(id)
}
